import Image from "next/image";
import questionIcon from "~/assets/icons/question-icon.svg";

import { Tooltip } from "@mui/material";

interface AccordionContentLabelProps {
  label: string;
  info?: string;
}

export default function AccordionContentLabel({
  label,
  info,
}: AccordionContentLabelProps) {
  return (
    <label className="flex gap-[6px] text-base font-thin">
      <span>{label}</span>
      {info && (
        <Tooltip title={info}>
          <Image src={questionIcon} alt="info" width={16} height={16} />
        </Tooltip>
      )}
    </label>
  );
}
