import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "110px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  color: ${({ border }) => (border ? "teal" : "white")};
  border: ${({ border }) => border && "1px solid teal"};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  filter: drop-shadow(4px 8px 16px rgba(25, 85, 53, 0.4));
  border-radius: 10px;
  align-items: center;
  justify-content: center;
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

export const Button = ({ width, height, children, border, mr, ml, mt, mb }) => {
  return (
    <Container
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      border={border}
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
};

export default Button;
