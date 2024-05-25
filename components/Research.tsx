"use client";
import Image from "next/image";
import research1 from "@/public/research1.svg";
import researchBg from "@/public/UntitledResearch.svg";
import { CandlestickChart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const buttons = [
  {
    title: "Screeners",
    href: "/screeners",
  },
  {
    title: "Comparator",
    href: "/comparator",
  },
  {
    title: "Asset Allocation",
    href: "/assetallocation",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "My Research",
    href: "/myresearch",
  },
  {
    title: "Proposals",
    href: "/proposals",
  },
];

const Research = () => {
  const pathname = usePathname();

  return (
    <div className="bg-transparent h-full w-screen mt-[5rem]">
      <Image
        src={researchBg}
        alt="dp"
        className=" h-auto w-full absolute z-[-1]"
      />
      <div className="flex flex-col justify-center items-center gap-0">
        <Image
          src={research1}
          alt="dp"
          className="mt-[3rem] h-auto w-[4.2rem]"
        />

        <div className="flex flex-col  justify-center items-center gap-2 ">
          <p className="text-[#FFFFFF] text-[min(11.5vh,11.5vw)] font-ivy ">
            Research
          </p>
          <p className="text-[#FFFFFF] w-[80%] text-center font-poppins font-extralight tracking-wider text-[min(2.3vh,2.3vw)] leading-relaxed">
            Let us be the compass that guides you towards effective portfolio
            management. Harness real-time data and cutting-edge analytics to
            uncover investment insights, evaluate market trends, and fine-tune
            your strategies.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-6 mt-12">
        {buttons.map((item, index) => {
          return (
            <button
              key={index}
              className={cn(
                "w-fit h-fit py-4 px-8 font-poppins hover:bg-[#4D75FD] transition  font-semibold tracking-wider smLaptop:text-[min(2.2vh,2.2vw)] laptop:text-[min(2vh,2vw)] rounded-full bg-[#07335B] text-[#FFFFFF]",
                pathname.includes(item.href) && "bg-[#4D75FD] "
              )}>
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
