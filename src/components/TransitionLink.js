"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    const overlay = document.querySelector(".transition-overlay");

    // Slide in the overlay
    overlay?.classList.add("slide-in");
    await sleep(1000); // Wait for slide-in animation

    router.push(href);

    // Slide out the overlay after the new page is triggered
    overlay?.classList.remove("slide-in");
    overlay?.classList.remove("slide-out");
    await sleep(1000); // Wait for slide-out animation

    // Reset the overlay for future transitions
    overlay?.classList.remove("slide-out");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
