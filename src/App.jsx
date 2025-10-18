import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { CirclePlay } from "lucide-react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import { RiTailwindCssFill } from "react-icons/ri";

function App() {
  const [count, setCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  return (
    <div className="min-h-screen  flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <div className="flex justify-center gap-3">
          <Badge
            /* "https://react.dev" */
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              React 19.2{" "}
              <img
                src={reactLogo}
                alt="React logo"
                className={`${
                  isSpinning ? "animate-spin duration-1000" : ""
                } ml-1 size-4`}
              />
            </a>
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <a href="https://v6.vite.dev/" target="_blank" rel="noreferrer">
              Vite v6.0.0{" "}
              <img src={viteLogo} alt="Vite logo" className="ml-1 size-4" />
            </a>
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              Tailwind CSS v4.1 <RiTailwindCssFill className="ml-1 size-4" />
            </a>
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
              Shadcn UI{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                class="ml-1 size-4"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                ></line>
              </svg>
            </a>
          </Badge>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Vite + React & Shadcn UI Starter Template
        </h1>
        <p className="mt-6 md:text-lg max-w-xl mx-auto">
          A starter template combining Vite + React, Tailwind CSS, and Shadcn UI
          components for rapid development.
        </p>
        <p className="mt-2 md:text-lg">
          Edit <Badge variant="secondary">src/App.jsx</Badge> and save to test
          HMR
        </p>
        <p>
          Click on the Vite, React, Tailwindcss, Shadcn badges to learn more
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-base"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
            onClick={() => setIsSpinning(!isSpinning)}
          >
            <CirclePlay className="size-5" /> Spin
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
