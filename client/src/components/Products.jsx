import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, SetProducts] = useState([]);
  const [filteredProducts, SetFilteredProducts] = useState([]);

  const options = {
    method: "GET",
    url: "https://fashion4.p.rapidapi.com/v1/version",
    headers: {
      "x-rapidapi-host": "fashion4.p.rapidapi.com",
      "x-rapidapi-key": "26160fa9c2msh714175ba676e9c6p18c490jsn10abdba15b39",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
