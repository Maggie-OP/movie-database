import { AccordionContentItem as StyledAccordionContentItem } from "./styles";

interface AccordionContentItemProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function AccordionContentItem({
  children,
}: AccordionContentItemProps) {
  return <StyledAccordionContentItem>{children}</StyledAccordionContentItem>;
}
