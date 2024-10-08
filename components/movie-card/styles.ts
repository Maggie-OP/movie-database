"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem 0 rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const CardMedia = styled.div`
  position: relative;
`;

export const CardMediaLink = styled(Link)`
  display: flex;
  height: 17.75rem;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-bottom: 0.0625rem solid #e3e3e3;
`;

export const CardOptions = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 50%;
  background: #9ca3af;
  &:hover {
    background: #01b4e4;
  }
`;

export const MovieRating = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 100%;
  transform: translateY(-50%);
  width: 2.125rem;
  height: 2.125rem;
  border-radius: 50%;
  background: #081c22;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: #fff;
`;

export const CardContent = styled.div`
  padding: 0.75rem;
  padding-top: 1.625rem;
`;

export const CardContentTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  &:hover {
    color: #01b4e4;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.125rem;
  color: #00000060;
`;
