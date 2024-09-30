import Link from "next/link";
import Image from "next/image";
import {
  AddNewItem,
  CustomLink,
  Header,
  LanguageItem,
  List,
  ListItem,
  ListItemLink,
  Logo,
  MenuContent,
  MenuToggle,
  MenuToggleLabel,
  Popup,
  PopupList,
  PopupListItem,
  RightSideList,
  SearchItem,
} from "./styles";

import logo from "../../assets/icons/logo.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import menuIcon from "~/assets/icons/menu-icon.svg";

import { SECTION_LINKS } from "./constants";

const MainHeader = () => {
  return (
    <Header>
      <CustomLink href="/" className="mr-4">
        <Logo src={logo} alt="Logo" width={154} height={20} />
      </CustomLink>
      <MenuToggleLabel htmlFor="toggle-menu">
        <Image src={menuIcon} alt="header menu" width={40} height={40} />
      </MenuToggleLabel>
      <MenuToggle type="checkbox" id="toggle-menu" />
      <MenuContent className="menu">
        <List>
          {SECTION_LINKS.map(({ name, sections }) => (
            <ListItem key={name} aria-haspopup>
              <ListItemLink href="" aria-label={name}>
                {name}
              </ListItemLink>
              {!!sections?.length && (
                <Popup className="popup">
                  <PopupList>
                    {sections.map((section) => (
                      <PopupListItem key={section.name}>
                        <Link
                          href={section.href || ""}
                          className="w-full p-[6px]"
                        >
                          {section.name}
                        </Link>
                      </PopupListItem>
                    ))}
                  </PopupList>
                </Popup>
              )}
            </ListItem>
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
      </RightSideList>
    </Header>
  );
};

export default MainHeader;
