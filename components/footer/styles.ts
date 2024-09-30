"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 80px 40px;
  margin-top: auto;
  background: #032541;
  @media (max-width: 920px) {
    padding-inline: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
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
    gap: 16px;
    flex-wrap: wrap;
  }
`;

export const Logo = styled(Image)`
  min-width: 130px;
  height: 94px;
  position: absolute;
  bottom: 50%;
  right: 0;
  @media (max-width: 920px) {
    position: initial;
    bottom: 0;
  }
`;

export const JoinLink = styled(Link)`
  padding: 8px 24px;
  border-radius: 6px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #01b4e4;
  border: 1px solid #fff;
  background: #fff;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: max-content;
  @media (max-width: 620px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  padding-block: 4px;
`;

export const ListItem = styled.li`
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;
