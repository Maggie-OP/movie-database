import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/icons/logo.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";

import { SECTION_LINKS } from "./constants";
import { cn } from "@/utils/cn";

const MainHeader = () => {
  const listClassname =
    "flex items-center gap-[20px] text-base text-white font-semibold";
  const listItemFlex = "flex items-center";
  const listItemText = "p-2 cursor-pointer";

  return (
    <header className="flex items-center bg-[rgb(3,37,65)] min-h-[64px] py-3 px-[40px] gap-2">
      <Link href="/">
        <Image src={logo} alt="Logo" width={154} height={20} />
      </Link>
      <ul className={listClassname}>
        {SECTION_LINKS.map(({ name, sections }) => (
          <li
            className={cn("group relative", listItemText)}
            key={name}
            aria-haspopup
          >
            <Link href="">{name}</Link>
            {!!sections?.length && (
              <div className="absolute left-0 top-full w-[170px] rounded-md bg-white border border-[rgba(0,0,0,0.15)] hidden group-hover:block group-focus:bg-red">
                <ul className="py-2">
                  {sections.map((section) => (
                    <li
                      className="text-black px-6 py-0.5 text-base font-normal leading-6 hover:bg-[#f8f9fa]"
                      key={section.name}
                    >
                      <Link href={section.href || ""}>{section.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul className={cn(listClassname, "ml-auto")}>
        <li className={listItemFlex}>
          <Image src={plusIcon} alt="Add new" width={20} height={20} />
        </li>
        <li className="border border-white px-1 rounded-[4px]">
          <span>EN</span>
        </li>
        {["Login", "Join TMBD"].map((item) => (
          <li className={listItemText} key={item}>
            {item}
          </li>
        ))}
        <li>
          <Image src={searchIcon} alt="Search" width={28} height={28} />
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
