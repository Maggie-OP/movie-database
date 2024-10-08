"use client";

import styled from "styled-components";

export const ListItemButton = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  & img {
    display: none;
  }
  @media (max-width: 860px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 100ms;
    & img {
      display: inline-block;
      transform: rotate(-90deg);
    }
    &[aria-expanded="true"] img {
      transform: rotate(0);
    }
  }
`;

export const Popup = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 100%;
  width: 10.625rem;
  border-radius: 0.375rem;
  background-color: white;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  visibility: hidden;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const PopupList = styled.ul`
  padding-block: 0.5rem;
`;

export const PopupListItem = styled.li`
  display: flex;
  width: 100%;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 400;
  color: #000;
  padding: 0.1875rem 1.5rem;
  &:hover {
    background: #f8f9fa;
  }
  & a {
    width: 100%;
    padding: 0.375rem;
  }
`;

export const MobileList = styled.ul`
  display: none;
  padding: 0;
  @media (max-width: 860px) {
    display: unset;
    overflow: hidden;
    max-height: 0;
    width: 100%;
    transition: max-height 200ms ease-out;
    padding: 0 1.25rem;
    &.is-open {
      max-height: 12.5rem;
    }
  }
`;

export const MobileListItem = styled.li`
  padding-block: 0.25rem;
`;
