"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledAccordion = styled.div`
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem 0 rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  font-size: 1.125;
  line-height: 1.5rem;
  font-weight: 600;
`;

export const ExpandIcon = styled(Image)`
  width: 1rem;
  height: 1rem;
  transition: transform 100ms;
  &.expand {
    transform: rotate(-90deg);
  }
`;

export const AccordionContent = styled.div`
  border-top: 0.0625rem solid #e3e3e3;
  display: none;
  &.is-open {
    display: block;
  }
`;
