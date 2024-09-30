"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const CardMedia = styled.div`
  position: relative;
`;

export const CardMediaLink = styled(Link)`
  display: flex;
  height: 284px;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

export const CardOptions = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #9ca3af;
  &:hover {
    background: #01b4e4;
  }
`;

export const MovieRating = styled.div`
  position: absolute;
  left: 12px;
  top: 100%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #081c22;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #fff;
`;

export const CardContent = styled.div`
  padding: 12px;
  padding-top: 26px;
`;

export const CardContentTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  &:hover {
    color: #01b4e4;
  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: #00000060;
`;
