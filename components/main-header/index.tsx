import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/icons/logo.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";

import { SECTION_LINKS } from "./constants";
import { cn } from "~/utils/cn";

const MainHeader = () => {
  const listClassname =
    "flex items-center gap-[14px] text-base text-white font-semibold";
  const linkClassname = "p-2 text-base leading-6 font-semibold";

  return (
    <header className="flex items-center bg-blue-1000 min-h-[64px] py-3 px-[40px]">
      <Link href="/" className="mr-4">
        <Image src={logo} alt="Logo" width={154} height={20} />
      </Link>
      <ul className={listClassname}>
        {SECTION_LINKS.map(({ name, sections }) => (
          <li className="flex group relative" key={name} aria-haspopup>
            <Link href="" className={linkClassname} aria-label={name}>
              {name}
            </Link>
            {!!sections?.length && (
              <div className="absolute z-10 left-0 top-full w-[170px] rounded-md bg-white border border-[rgba(0,0,0,0.15)] hidden group-focus-within:block group-hover:block">
                <ul className="py-2">
                  {sections.map((section) => (
                    <li
                      className="flex w-full text-base font-normal text-black hover:bg-[#f8f9fa]"
                      key={section.name}
                    >
                      <Link
                        href={section.href || ""}
                        className="w-full p-[6px]"
                      >
                        {section.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul className={cn(listClassname, "ml-auto gap-5")}>
        <li className="">
          <Image src={plusIcon} alt="Add new" width={20} height={20} />
        </li>
        <li className="flex items-center justify-center border border-white p-1 rounded-[4px] ml-4">
          <span>EN</span>
        </li>
        {["Login", "Join TMBD"].map((item) => (
          <li className={linkClassname} key={item}>
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
