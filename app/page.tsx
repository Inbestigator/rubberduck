import React from "react";
import Image from "next/image";
import Beams from "@/components/beams.svg";
import Duck from "@/components/duck";
import Input from "@/components/input";
import Messages from "@/components/messages";

export default function Page() {
  return (
    <div className="flex h-full w-full max-w-96 flex-col gap-2">
      <div className="unselectable relative p-24">
        <Image
          className="absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full mix-blend-multiply"
          src={Beams as string}
          alt="Beams"
          draggable={false}
        />
        <div
          className="gradient-circle absolute inset-0 rounded-full bg-yellow-50"
          style={{
            background: "radial-gradient(circle, transparent 30%, #60a5fa 75%)",
          }}
        />
        <Duck />
      </div>
      <Messages />
      <Input />
      <footer className="text-center text-sm text-blue-500/30">
        <p>Made with ❤️ by Inbestigator </p>
        <p>Duck svg by lavarmsg</p>
      </footer>
    </div>
  );
}
