"use client";
import styled from "styled-components";

export const RadioWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  &:first-of-type {
    margin-top: 0;
  }
  & label {
    cursor: pointer;
  }
`;

export const Radio = styled.input`
  appearance: none;
  display: flex;
  &::before {
    content: "";
    min-width: 14px;
    height: 14px;
    border: 1px solid #adb5bd;
    border-radius: 50%;
  }
  &:checked::before {
    border-color: #01b4e4;
    border-width: 4px;
  }
`;
