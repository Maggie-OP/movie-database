"use client";

import styled from "styled-components";

export const ListItemButton = styled.button`
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
