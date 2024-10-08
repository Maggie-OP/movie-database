"use client";
import styled from "styled-components";

export const RadioWrapper = styled.div`
  margin-top: 0.375;
  display: flex;
  align-items: center;
  gap: 0.25rem;
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
    min-width: 0.875rem;
    height: 0.875rem;
    border: 0.0625rem solid #adb5bd;
    border-radius: 50%;
  }
  &:checked::before {
    border-color: #01b4e4;
    border-width: 0.25rem;
  }
`;
