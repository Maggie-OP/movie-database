"use client";

import { useState } from "react";

import Image from "next/image";
import expandIcon from "~/assets/icons/expand-icon.svg";
import { cn } from "~/utils/cn";

interface AccordionProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const accordionClassname = cn(
    "shadow border border-gray-100 rounded-lg flex flex-col overflow-hidden h-[50px]",
    isOpen && "h-auto"
  );

  const expendIconClassname = cn(
    "transition-transform",
    isOpen && "-rotate-90"
  );

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={accordionClassname}>
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between py-[14px] px-[16px] h-[48px]"
      >
        <span>{title}</span>
        <Image
          src={expandIcon}
          alt="expend filter"
          width={16}
          height={16}
          className={expendIconClassname}
        />
      </button>
      <div className="border-t border-t-gray-100 py-[14px] px-[16px]">
        {children}
      </div>
    </div>
  );
}
