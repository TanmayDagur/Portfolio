"use client";

import { useEffect, useState } from "react";

type TypingProps = {
  text: string;
  speed?: number;
};

export default function TypingText({ text, speed = 80 }: TypingProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="border-r-2 border-white pr-1">
      {displayedText}
    </span>
  );
}