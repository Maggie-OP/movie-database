"use client";

import { useState } from "react";
import { NavLink } from "/utils/types";

import Link from "next/link";
import Image from "next/image";
import { ListItem } from "/components/main-header/styles";
import {
  ListItemButton,
  MobileList,
  MobileListItem,
  Popup,
  PopupList,
  PopupListItem,
} from "./styles";

import expandIcon from "/assets/icons/expand-icon-white.svg";

interface ListItemWithPopupProps {
  listItem: NavLink;
}

export default function ListItemWithPopup({
  listItem: { name, sections },
}: ListItemWithPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ListItem aria-haspopup>
        <ListItemButton
          aria-label={name}
          id={`popup-${name}`}
          aria-expanded={isOpen}
          onClick={toggleOpen}
        >
          {name}
          {sections?.length && (
            <Image
              src={expandIcon}
              alt="show sections"
              width={16}
              height={16}
            />
          )}
        </ListItemButton>
        {!!sections?.length && (
          <>
            <Popup
              className="popup"
              role="menu"
              aria-labelledby={`popup-${name}`}
            >
              <PopupList>
                {sections.map((section) => (
                  <PopupListItem key={section.name}>
                    <Link href={section.href || "/"}>{section.name}</Link>
                  </PopupListItem>
                ))}
              </PopupList>
            </Popup>
          </>
        )}
        <MobileList
          role="menu"
          aria-labelledby={`popup-${name}`}
          className={isOpen ? "is-open" : ""}
        >
          {sections?.map((section) => (
            <MobileListItem key={section.name}>
              <Link href={section.href || "/"}>{section.name}</Link>
            </MobileListItem>
          ))}
        </MobileList>
      </ListItem>
    </>
  );
}
