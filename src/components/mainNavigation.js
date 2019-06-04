import React from "react";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  background-color: #ea5210;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  font-weight: 600;
`;

const ListedItem = styled.li`
  padding: 1rem;
  color: white;
  overflow: hidden;
`;

const mainNavigation = () => {
  return (
    <Nav>
      <Ul>
        <ListedItem>Xbox One</ListedItem>
        <ListedItem>Playstation 4</ListedItem>
        <ListedItem>Wii</ListedItem>
        <ListedItem>3DS</ListedItem>
        <ListedItem>PSP</ListedItem>
        <ListedItem>PC</ListedItem>
        <ListedItem>Gear and Gadgets</ListedItem>
        <ListedItem>Playstation 3</ListedItem>
        <ListedItem>Nintendo GBA</ListedItem>
        <ListedItem>Typography</ListedItem>
        <ListedItem>More+</ListedItem>
      </Ul>
    </Nav>
  );
};

export default mainNavigation;
