"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import {
  AddNewItem,
  CustomLink,
  Header,
  LanguageItem,
  List,
  ListItem,
  Logo,
  MenuContent,
  IconButton,
  RightSideList,
  SearchItem,
  Overlap,
} from "./styles";
import ListItemWithPopup from "./components/list-item-with-popup";

import logo from "../../assets/icons/logo.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import menuIcon from "~/assets/icons/menu-icon.svg";
import closeIcon from "~/assets/icons/close-icon.svg";

import { SECTION_LINKS } from "./constants";

const MainHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      handleCloseMenu();
    }
  }, [pathname]);

  return (
    <Header>
      <CustomLink href="/" className="mr-4">
        <Logo src={logo} alt="Logo" width={154} height={20} />
      </CustomLink>
      <MenuContent className={isMenuOpen ? "is-open" : ""}>
        <List className="with-padding">
          <li>
            <IconButton aria-label="Close menu" onClick={handleCloseMenu}>
              <Image src={closeIcon} alt="close menu" width={40} height={40} />
            </IconButton>
          </li>
          {SECTION_LINKS.map((item) => (
            <ListItemWithPopup listItem={item} key={item.name} />
          ))}
          {["Login", "Join TMBD"].map((item) => (
            <ListItem key={item} className="desktop-hidden p">
              {item}
            </ListItem>
          ))}
        </List>
      </MenuContent>
      <RightSideList>
        <AddNewItem>
          <Image src={plusIcon} alt="Add new" width={20} height={20} />
        </AddNewItem>
        <LanguageItem>
          <span>EN</span>
        </LanguageItem>
        <>
          {["Login", "Join TMBD"].map((item) => (
            <ListItem key={item} className="mobile-hidden">
              {item}
            </ListItem>
          ))}
        </>
        <SearchItem>
          <Image src={searchIcon} alt="Search" width={28} height={28} />
        </SearchItem>
        <IconButton onClick={handleToggleMenu} aria-label="Open menu">
          <Image src={menuIcon} alt="header menu" width={40} height={40} />
        </IconButton>
      </RightSideList>
      <Overlap
        className={isMenuOpen ? "is-open" : ""}
        onClick={handleCloseMenu}
      />
    </Header>
  );
};

export default MainHeader;
