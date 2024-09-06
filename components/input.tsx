"use client";

import { useSetRecoilState } from "recoil";
import { messagesAtom } from "./messages";
import { Input } from "./ui/input";

export default function CustomInput() {
  const setMessages = useSetRecoilState(messagesAtom);

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const value = e.currentTarget.value;
    if (!value) return;
    setMessages((messages) => [
      ...messages,
      { sender: "user", content: value },
    ]);
    e.currentTarget.value = "";
  }

  return (
    <Input
      className="text-base"
      placeholder="What's on your mind?"
      onKeyDown={handleKey}
    />
  );
}
