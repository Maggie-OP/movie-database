"use client";

import styled from "styled-components";

export const PageWrapper = styled.section`
  flex: 1;
  display: flex;
  gap: 30px;
  @media (max-width: 780px) {
    flex-direction: column;
    & form {
      max-width: 100%;
    }
  }
`;

export const Form = styled.form`
  max-width: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
  gap: 32px;
`;

export const LoadMoreBtn = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  background: #01b4e4;
  color: #fff;
  &:hover {
    color: #000;
  }
  transition: color 200ms;
`;
