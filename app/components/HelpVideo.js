"use client";
import { useState } from "react";

export default function HelpVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("max-w-2xl"); // Default size

  return (
    <div className="relative text-center mt-2">
      <div className="flex justify-center">
        <button
          className="flex items-center space-x-2 px-3 py-1  text-xs text-black rounded-md  mx-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hover:underline">Guide</span>
          <span className="text-xl">📺</span>
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 flex flex-col items-center">
          <div
            className={`w-full ${size} aspect-video border rounded-lg shadow-lg`}
          >
            <video controls className="w-full h-full">
              <source src="/short.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Buttons to Change Video Size */}
          <div className="mt-2 flex space-x-2">
            <button
              className="px-3 py-1 bg-blue-500 text-xs text-white rounded-md hover:bg-blue-700"
              onClick={() => setSize("max-w-md")}
            >
              Small
            </button>
            <button
              className="px-3 py-1 bg-green-500 text-xs text-white rounded-md hover:bg-green-700"
              onClick={() => setSize("max-w-2xl")}
            >
              Medium
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-xs text-white rounded-md hover:bg-red-700"
              onClick={() => setSize("max-w-4xl")}
            >
              Large
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
