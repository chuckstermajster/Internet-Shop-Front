import React from "react";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  background-color: black;
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 0.4rem;
  color: white;
`;

const ListedItem = styled.li`
  padding: 1rem;
  border-left: 1px solid grey;

  ${props =>
    props.type === "welcome" &&
    css`
      color: grey;
      margin-right: auto;
      font-weight: 800;
      border: none;
    `}

  ${props =>
    props.type === "currency" &&
    css`
      color: pink;
    `}

    ${props =>
      props.type === "cart" &&
      css`
        margin-right: 4rem;
      `}
`;

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <ListedItem type="welcome">Welcome to the game store</ListedItem>
        <ListedItem type="currency">Currency</ListedItem>
        <ListedItem type="login">login</ListedItem>
        <ListedItem type="cart">Cart</ListedItem>
      </Ul>
    </Nav>
  );
};

export default NavBar;
