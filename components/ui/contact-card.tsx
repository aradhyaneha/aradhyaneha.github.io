import React from "react";
import { cn } from "@/lib/utils";

export function ContactCard() {
  return (
    <Card>
      <CardSkeletonContainer showGradient={false}>
        <Skeleton />
      </CardSkeletonContainer>
      <CardDescription>
        Feel free to reach out to me with your design queries or if you just want to say Hi 👋
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  
  return (
    <>
    <div className="p-8 overflow-hidden h-full relative flex flex-col items-left justify-self-auto">
        <a href="https://www.linkedin.com/in/neha-aradhya/" className="flex flex-row mb-4 items-center" target="_blank">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                <path d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z"
                fill="currentColor"/>
            </svg>
        linkedin.com/in/neha-aradhya
        </a>          
        <a href="mailto:aradhyaneha@gmail.com" className="flex flex-row mb-4 items-center" target="_blank">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem">
                <path d="M0,4 C0,2.895431 0.895431,2 2,2 L14,2 C15.1046,2 16,2.895431 16,4 L16,12 C16,13.1046 15.1046,14 14,14 L2,14 C0.895431,14 0,13.1046 0,12 L0,4 Z M2,4 L14,4 L14,4.0077 L8.00395,7.46952 L2,4.00315 L2,4 Z M2,6.31255 L2,12 L14,12 L14,6.3171 L8.00395,9.77893 L2,6.31255 Z"
                fill="currentColor"/>
            </svg>
            aradhyaneha@gmail.com
        </a>
        <a href="tel:+393516589478" className="flex flex-row mb-4 items-center" target="_blank">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                fill="currentColor"/>
            </svg>
            +39 351 6589478
        </a>
        <p className="flex flex-row mb-4 items-center">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem">
                <path d="M2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                fill="currentColor"/>
            </svg>
            Milan, Italy
        </p>   
    </div>
    </>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};