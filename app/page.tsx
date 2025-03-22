"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContactCard as ContactCard } from "@/components/ui/contact-card";


export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Neha Aradhya
        <TextGenerateEffect words="Architect and Interior Designer."/>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "",
    title: "",
    src: "/portfolio-cover.jpg",
    content: <iframe allowFullScreen="allowfullscreen" scrolling="no" className="fp-iframe" src="https://heyzine.com/flip-book/9b931e5eb2.html" 
    style={{"border": "0px", "width": "100%", "height": "600px"}}></iframe>,
  },
  {
    category: "Resume",
    title: "One Pager",
    src: "/resume-cover.jpg",
    content: <iframe allowFullScreen="allowfullscreen" scrolling="no" className="fp-iframe" 
    style={{"border": "0px", "width": "100%", "height": "600px"}} src="https://heyzine.com/flip-book/46c037e875.html"></iframe>,
  },
  {
    category: "",
    title: "Contact Details",
    src: "/contact.jpg",
    content: <ContactCard/>
  },
];
