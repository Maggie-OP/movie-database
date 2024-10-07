import Link from "next/link";

import {
  Footer as StyledFooter,
  Nav,
  LogoSection,
  Logo,
  JoinLink,
  Section,
  SectionTitle,
  ListItem,
} from "./styles";

import logo from "/assets/icons/logo.svg";

import { FOOTER_SECTIONS } from "/utils/constants";

export default function Footer() {
  return (
    <StyledFooter>
      <Nav>
        <LogoSection>
          <Logo src={logo} alt="TMBD logo" width={130} height={94} />
          <JoinLink href="/">join the community</JoinLink>
        </LogoSection>
        <>
          {FOOTER_SECTIONS.map(({ name, items }) => (
            <Section key={name}>
              <SectionTitle>{name}</SectionTitle>
              <ul>
                {items.map(({ name }) => (
                  <ListItem key={name}>
                    <Link href="/">{name}</Link>
                  </ListItem>
                ))}
              </ul>
            </Section>
          ))}
        </>
      </Nav>
    </StyledFooter>
  );
}
