import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import Pay from "../assets/images/payment.png";
import { mobil } from "../resposive";

const Container = styled.div`
  display: flex;
  ${mobil({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobil({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  white-space: nowrap;
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobil({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Link = styled.a``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MEN'S WEAR</Logo>
        <Desc>
          Everything we make at starts with Earth's Favorite Fiber, Organic
          Cotton bamboo,hemp, <br />
          Growing they orgnically saves vast amounts of water and uses no toxic
          chemicals.
        </Desc>
        <SocialContainer>
          <SocialIcon
            href="https://www.facebook.com/islombek9717"
            color="3b5999"
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/islombek9717/"
            color="aa379c"
          >
            <Instagram />
          </SocialIcon>
          <SocialIcon href="https://t.me/islombek9717" color="55afee">
            <Telegram />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/islombek-sultonov-980311175/"
            color="0270ad"
          >
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />8 Bullur street, Naryn,
          Namangan, Uzbekistan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +99 893 272 44 84
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          sultonovislom9717@gmail.com
        </ContactItem>

        <Payment src={Pay} />
      </Right>
    </Container>
  );
};

export default Footer;
