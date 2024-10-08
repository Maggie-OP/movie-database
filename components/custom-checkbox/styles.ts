"use client";
import styled from "styled-components";

export const Checkboxes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.label`
  padding: 0.375rem 0.75rem;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.875rem;
  font-size: 0.875rem;
  line-height: 1;
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
  &:has(input:focus-visible) {
    border-color: #01b4e4;
  }
`;
