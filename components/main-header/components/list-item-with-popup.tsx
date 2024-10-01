import { SectionLink } from "../constants";

import Link from "next/link";
import { ListItem } from "../styles";
import { ListItemButton, Popup, PopupList, PopupListItem } from "./styles";

interface ListItemWithPopupProps {
  listItem: SectionLink;
}

export default function ListItemWithPopup({
  listItem: { name, sections },
}: ListItemWithPopupProps) {
  return (
    <>
      <ListItem aria-haspopup>
        <ListItemButton aria-label={name} id={`popup-${name}`}>
          {name}
        </ListItemButton>
        {!!sections?.length && (
          <Popup
            className="popup"
            role="menu"
            aria-labelledby={`popup-${name}`}
          >
            <PopupList>
              {sections.map((section) => (
                <PopupListItem key={section.name}>
                  <Link href={section.href || ""}>{section.name}</Link>
                </PopupListItem>
              ))}
            </PopupList>
          </Popup>
        )}
      </ListItem>
    </>
  );
}
