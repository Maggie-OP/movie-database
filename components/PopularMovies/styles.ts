"use client";

import styled from "styled-components";

export const PageWrapper = styled.section`
  flex: 1;
  display: flex;
  gap: 1.875rem;
  @media (max-width: 780px) {
    flex-direction: column;
    & form {
      max-width: 100%;
    }
  }
`;

export const Form = styled.form`
  max-width: 16.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  gap: 2rem;
`;

export const LoadMoreBtn = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 700;
  background: #01b4e4;
  color: #fff;
  &:hover {
    color: #000;
  }
  transition: color 200ms;
`;
