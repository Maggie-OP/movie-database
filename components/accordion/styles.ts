"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledAccordion = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 50px;
  &.isOpen {
    height: auto;
  }
`;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  height: 48px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const ExpandIcon = styled(Image)`
  width: 16px;
  height: 16px;
  transition: transform 200ms;
  &.expand {
    transform: rotate(-90deg);
  }
`;

export const AccordionContent = styled.div`
  border-top: 1px solid #e3e3e3;
`;
