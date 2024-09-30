import Image from "next/image";
import { Label, Tooltip } from "./styles";

import questionIcon from "~/assets/icons/question-icon.svg";

interface AccordionContentLabelProps {
  label: string;
  info?: string;
}

export default function AccordionContentLabel({
  label,
  info,
}: AccordionContentLabelProps) {
  return (
    <Label>
      <span>{label}</span>
      {info && (
        <div>
          <Image
            src={questionIcon}
            alt="info"
            aria-describedby="filter-option-tooltip"
            width={16}
            height={16}
          />
          <Tooltip role="tooltip" id="filter-option-tooltip">
            {info}
          </Tooltip>
        </div>
      )}
    </Label>
  );
}
