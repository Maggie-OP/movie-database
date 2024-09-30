"use client";

import styled from "styled-components";

export const Checkboxes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  padding: 6px 12px;
  border: 1px solid #e3e3e3;
  border-radius: 14px;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  & input {
    width: 0;
    height: 0;
  }
  &:hover,
  &:has(input:checked) {
    color: #fff;
    background: #01b4e4;
  }
`;

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
