"use client";

import { useState } from "react";

import {
  StyledAccordion,
  AccordionHeader,
  ExpandIcon,
  AccordionContenrt,
} from "./styles";

import expandIcon from "~/assets/icons/expand-icon.svg";

interface AccordionProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <StyledAccordion className={isOpen ? "isOpen" : ""}>
      <AccordionHeader onClick={toggleOpen} type="button">
        <span>{title}</span>
        <ExpandIcon
          src={expandIcon}
          alt="expend filter"
          width={16}
          height={16}
          className={!isOpen ? "expand" : ""}
        />
      </AccordionHeader>
      <AccordionContenrt>{children}</AccordionContenrt>
    </StyledAccordion>
  );
}
