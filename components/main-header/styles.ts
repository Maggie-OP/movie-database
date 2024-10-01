"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Header = styled.header`
  display: flex;
  align-items: center;
  background: #032541;
  padding: 12px 40px;
  min-height: 64px;
  @media (max-width: 920px) {
    padding-inline: 20px;
  }
`;

export const CustomLink = styled(Link)`
  margin-right: 16px;
`;

export const Logo = styled(Image)`
  min-width: 154px;
  height: 20px;
`;

export const IconButton = styled.button`
  display: none;
  @media (max-width: 860px) {
    display: block;
  }
`;

export const Overlap = styled.div`
  display: none;

  @media (max-width: 860px) {
    position: absolute;
    inset: 0;
    z-index: 15;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    &.is-open {
      display: block;
    }
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    max-width: 0;
    background: #032541;
    z-index: 20;
    transition: max-width 100ms ease-out;
    overflow: hidden;
    &.is-open {
      max-width: 300px;
      transition: max-width 200ms ease-out;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: #fff;
  & .desktop-hidden {
    display: none;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    &.with-padding {
      padding: 20px;
      width: 100%;
    }
    & .mobile-hidden {
      display: none;
    }
    & .desktop-hidden {
      display: unset;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  position: relative;
  white-space: nowrap;

  &:focus-within > div,
  &:hover > div {
    visibility: visible;
  }
  &.p {
    padding: 8px;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const RightSideList = styled(List)`
  margin-left: auto;
  gap: 20px;
  @media (max-width: 860px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const AddNewItem = styled.li`
  min-width: 20px;
`;

export const LanguageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 4px;
  margin-left: 16px;
  @media (max-width: 860px) {
    margin-left: 0;
  }
`;

export const SearchItem = styled.li`
  min-width: 28px;
`;
