"use client";

import { atom, useRecoilValue } from "recoil";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface Message {
  sender: "user" | "ducky";
  content: string;
}

export const messagesAtom = atom({
  key: "messagesAtom",
  default: [] as Message[],
});

export default function Messages() {
  const messages = useRecoilValue(messagesAtom);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex max-h-64 flex-col gap-2 overflow-scroll">
      {messages.map((message) => (
        <Card
          key={message.content}
          className={cn(
            "w-[80%] rounded-bl-none",
            message.sender === "user" &&
              "self-end rounded-bl-lg rounded-br-none",
          )}
        >
          <CardContent className="pt-6">{message.content}</CardContent>
        </Card>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
