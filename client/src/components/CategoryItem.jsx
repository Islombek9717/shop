import React from "react";
import styled from "styled-components";
import Button from "../components/Generic/Button/Button";
import { mobil } from "../resposive";

const Container = styled.div`
  margin: 3px;
  height: 70vh;
  flex: 1;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobil({ height: "50vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  color: cyan;
  margin-bottom: 20px;
  white-space: nowrap;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button border>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
