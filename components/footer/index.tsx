import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/icons/logo-footer.svg";

import { FOOTER_SECTIONS } from "./constants";

export default function Footer() {
  return (
    <footer className="px-[40px] py-[80px] bg-blue-1000 mt-auto">
      <nav className="flex justify-between">
        <section className="flex flex-col justify-end relative">
          <Image
            src={logo}
            alt="TMBD logo"
            width={130}
            height={94}
            className="absolute right-0 bottom-1/2"
          />
          <Link
            href="/"
            className="px-6 py-2 bg-white rounded-md text-xl font-bold text-blue-100 uppercase border-[1px] border-white"
          >
            join the community
          </Link>
        </section>
        {FOOTER_SECTIONS.map(({ name, items }) => (
          <section key={name} className="flex flex-col gap-1">
            <h3 className="text-heading-3 font-bold text-white uppercase py-1">
              {name}
            </h3>
            <ul>
              {items.map(({ name }) => (
                <li
                  key={name}
                  className="max-w-[260px] text-ellipsis overflow-hidden whitespace-nowrap text-footer-text text-white"
                >
                  <Link href="">{name}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </footer>
  );
}
