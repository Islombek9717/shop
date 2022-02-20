import React from "react";
import styled from "styled-components";
import { mobil } from "../../../resposive";

const Container = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}%` : "110px")};
  ${mobil({ width: "48%", fontSize: "14px" })}
  height: ${({ height }) => (height ? `${height}%` : "40px")};
  color: ${({ border }) => (border ? "teal" : "white")};
  border: ${({ border }) => border && "1px solid teal"};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  background-color: ${({ filled }) => filled && "teal"};
  color: ${({ filled }) => filled && "white"};
  filter: drop-shadow(4px 8px 16px rgba(25, 85, 53, 0.4));
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all 0.3s;
  font-weight: 700;
  :active {
    transform: scale(0.95);
  }
  :hover {
    background: teal;
    color: white;
  }
  cursor: pointer;
`;

export const Button = ({
  width,
  height,
  children,
  border,
  filled,
  mr,
  ml,
  mt,
  mb,
  responsive,
}) => {
  return (
    <Container
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      responsive={responsive}
      border={border}
      width={width}
      height={height}
      filled={filled}
    >
      {children}
    </Container>
  );
};

export default Button;
