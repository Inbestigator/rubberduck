"use client";

import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { messagesAtom } from "./messages";

const responses = [
  "How do you think you could approach fixing it?",
  "Can you provide more details about that?",
  "What are some potential solutions to the problem?",
  "Could you elaborate on your experience with this issue?",
  "How would you suggest we resolve this situation?",
  "Have you encountered this problem before? If so, how did you handle it?",
  "What steps do you think we should take to address this?",
  "Can you break down the issue for me? I'd like to hear more about it.",
  "What specific challenges are you facing with this problem?",
  "How do you envision a solution to this issue?",
  "That's an intriguing point. How would you recommend we tackle it?",
  "Could you shed more light on this?",
  "What factors do you think are contributing to this?",
  "Can you share any previous experiences you've had with similar scenarios?",
  "What potential solutions come to mind for you?",
  "I'd like to understand your perspective better. Could you explain it further?",
  "How do you see this issue affecting the overall project?",
  "What resources or tools do you think could help resolve this?",
  "Can you suggest any best practices for dealing with this kind of problem?",
  "What would be your ideal outcome in resolving this issue?",
];

export default function Duck() {
  const [isPlayingStart, setIsPlayingStart] = useState(false);
  const [isMouseReleasedEarly, setIsMouseReleasedEarly] = useState(false);
  const [messages, setMessages] = useRecoilState(messagesAtom);

  const startAudioRef = useRef(
    typeof Audio != "undefined" && new Audio("/duckStart.mp3"),
  );
  const endAudioRef = useRef(
    typeof Audio != "undefined" && new Audio("/duckEnd.mp3"),
  );

  function handleMouseDown() {
    setIsPlayingStart(true);
    setIsMouseReleasedEarly(false);

    const startAudio = startAudioRef.current;
    const endAudio = endAudioRef.current;
    if (!startAudio || !endAudio) return;

    void startAudio.play();

    startAudio.onended = () => {
      setIsPlayingStart(false);
      if (isMouseReleasedEarly) {
        void endAudio.play();
      }
    };
  }

  function handleMouseUp() {
    const endAudio = endAudioRef.current;
    if (!endAudio) return;

    if (messages[messages.length - 1]?.sender === "user") {
      setMessages((messages) => [
        ...messages,
        {
          sender: "ducky",
          content:
            responses[Math.floor(Math.random() * responses.length)] ?? "Hmm...",
        },
      ]);
    }

    if (isPlayingStart) {
      setIsMouseReleasedEarly(true);
    } else {
      void endAudio.play();
    }
  }

  return (
    <div
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
      className="relative z-10 aspect-square size-full cursor-grab bg-[url('/duck.svg')] bg-center bg-no-repeat transition-all active:scale-x-90 active:scale-y-75 active:cursor-grabbing"
    />
  );
}
