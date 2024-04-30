"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type HeroProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  const router = useRouter();
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="flex flex-1 justify-between items-center max-w-7xl mx-auto px-4">
        <div className="text-left text-white z-10">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl my-4">{description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/dashboard")}
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-end flex-1 z-10">
          <Image
            src={imageUrl}
            alt="ForEverAfter Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
