"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Header = styled.header`
  display: flex;
  align-items: center;
  background: #032541;
  padding: 0.75rem 2.5rem;
  min-height: 4rem;
  @media (max-width: 920px) {
    padding-inline: 1.25rem;
  }
`;

export const CustomLink = styled(Link)`
  margin-right: 1rem;
`;

export const Logo = styled(Image)`
  min-width: 9.625rem;
  height: 1.25rem;
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
      max-width: 18.75rem;
      transition: max-width 200ms ease-out;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: #fff;
  & .desktop-hidden {
    display: none;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    &.with-padding {
      padding: 1.25rem;
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
    padding: 0.5rem;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const RightSideList = styled(List)`
  margin-left: auto;
  gap: 1.25rem;
  @media (max-width: 860px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const AddNewItem = styled.li`
  min-width: 1.25rem;
`;

export const LanguageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid #fff;
  border-radius: 0.25rem;
  padding: 0.25rem;
  margin-left: 1rem;
  @media (max-width: 860px) {
    margin-left: 0;
  }
`;

export const SearchItem = styled.li`
  min-width: 1.75rem;
`;
