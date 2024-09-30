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

export const MenuToggle = styled.input`
  display: none;
  @media (max-width: 820px) {
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
    &:checked ~ .menu {
      display: flex;
    }
  }
`;

export const MenuToggleLabel = styled.label`
  display: none;
  @media (max-width: 820px) {
    display: flex;
    cursor: pointer;
    order: 4;
    margin-left: 16px;
    min-width: 40px;
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
    top: 64px;
    right: 0;
    padding: 20px;
    width: 100%;
    max-width: 0;
    height: 0;
    max-width: 300px;
    height: calc(100vh - 64px);
    background: #032541;
    z-index: 20;
    display: none;
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
`;

export const ListItemLink = styled(Link)`
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const Popup = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 100%;
  width: 170px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  visibility: hidden;
`;

export const PopupList = styled.ul`
  padding-block: 8px;
`;

export const PopupListItem = styled.li`
  display: flex;
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: #000;
  padding: 3px 24px;
  &:hover {
    background: #f8f9fa;
  }
  & a {
    width: 100%;
    padding: 6px;
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
