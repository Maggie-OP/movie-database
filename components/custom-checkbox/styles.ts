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
