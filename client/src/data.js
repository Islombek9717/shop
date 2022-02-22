import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Slider1 from "./assets/images/background1.png";
import Slider2 from "./assets/images/background2.png";
import Slider3 from "./assets/images/background3.png";

import Category1 from "./assets/images/category1.jpg";
import Category2 from "./assets/images/category2.jpg";
import Category3 from "./assets/images/category3.jpg";

import Product1 from "./assets/images/product1.png";
import Product2 from "./assets/images/product2.png";
import Product3 from "./assets/images/product3.png";
import Product4 from "./assets/images/product4.png";
import Product5 from "./assets/images/product5.png";
import Product6 from "./assets/images/product6.png";
import Product7 from "./assets/images/product7.png";
import Product8 from "./assets/images/product8.png";

export const sliderItems = [
  {
    id: 1,
    img: `${Slider1}`,
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: `${Slider2}`,
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: `${Slider3}`,
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export const categories = [
  {
    id: 1,
    img: `${Category1}`,
    title: "SHIRT STYLE!",
    cat: "shirt",
  },
  {
    id: 2,
    img: `${Category2}`,
    title: "LOUNGEWEAR LOVE",
    cat: "loungewear",
  },
  {
    id: 3,
    img: `${Category3}`,
    title: "LIGHT JACKETS",
    cat: "jackets",
  },
];

export const popularProducts = [
  {
    id: 1,
    img: `${Product1}`,
  },
  {
    id: 2,
    img: `${Product2}`,
  },
  {
    id: 3,
    img: `${Product3}`,
  },
  {
    id: 4,
    img: `${Product4}`,
  },
  {
    id: 5,
    img: `${Product5}`,
  },
  {
    id: 6,
    img: `${Product6}`,
  },
  {
    id: 7,
    img: `${Product7}`,
  },
  {
    id: 8,
    img: `${Product8}`,
  },
];

export const routes = [
  {
    id: 1,
    pathname: "/home",
    Element: Home,
    hidden: false,
  },
  {
    id: 2,
    pathname: "/products/:category",
    Element: ProductList,
    hidden: false,
  },
  {
    id: 3,
    pathname: "/product/:id",
    Element: Product,
    hidden: false,
  },
  {
    id: 4,
    pathname: "/cart",
    Element: Cart,
    hidden: false,
  },
  {
    id: 5,
    pathname: "/login",
    Element: Login,
    hidden: true,
  },
  {
    id: 6,
    pathname: "/register",
    Element: Register,
    hidden: true,
  },
];
