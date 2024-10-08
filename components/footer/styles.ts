"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 5rem 2.5rem;
  margin-top: auto;
  background: #032541;
  @media (max-width: 920px) {
    padding-inline: 1.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  @media (max-width: 920px) {
    flex-wrap: wrap;
  }
`;

export const LogoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 920px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const Logo = styled(Image)`
  min-width: 8.125rem;
  height: 5.875rem;
  position: absolute;
  bottom: 50%;
  right: 0;
  @media (max-width: 920px) {
    position: initial;
    bottom: 0;
  }
`;

export const JoinLink = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #01b4e4;
  border: 0.0625rem solid #fff;
  background: #fff;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: max-content;
  @media (max-width: 620px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  padding-block: 0.25rem;
`;

export const ListItem = styled.li`
  max-width: 16.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #fff;
`;
