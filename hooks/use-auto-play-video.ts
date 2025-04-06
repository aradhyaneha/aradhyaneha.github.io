'use client';

import { useEffect, useRef } from 'react';

// In ios, there are problems in autoplaying video. When the battery is low, or it is Low power mode, videos do not autoplay https://webkit.org/blog/6784/new-video-policies-for-ios/
// This function fixes this by explicitly playing the videos when user makes the first interaction
export function useAutoPlayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      }
    };

    // Try to play when video is loaded
    const handleCanPlay = () => {
      attemptPlay();
    };

    // iOS-specific events that might help trigger playback
    const userEvents = [
      'touchstart',
      'touchend',
      'click',
      'scroll',
      'mousedown',
      'keydown',
      'orientationchange'
    ];

    const handleUserInteraction = () => {
      attemptPlay();
      // Remove all event listeners after first interaction
      userEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };

    // Add all event listeners
    userEvents.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    // Add video-specific event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadedmetadata', handleCanPlay);

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadedmetadata', handleCanPlay);
      }
      userEvents.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  return videoRef;
} 