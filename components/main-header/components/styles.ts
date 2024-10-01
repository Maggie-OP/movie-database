"use client";

import styled from "styled-components";

export const ListItemButton = styled.button`
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  & img {
    display: none;
  }
  @media (max-width: 860px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 200ms;
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
  width: 170px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  visibility: hidden;
  @media (max-width: 860px) {
    display: none;
  }
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

export const MobileList = styled.ul`
  display: none;
  padding: 0;
  @media (max-width: 860px) {
    display: unset;
    overflow: hidden;
    max-height: 0;
    width: 100%;
    transition: max-height 200ms ease-out;
    padding: 0 20px;
    &.is-open {
      max-height: 200px;
    }
  }
`;

export const MobileListItem = styled.li`
  padding-block: 4px;
`;
