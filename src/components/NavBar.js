import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: blue;
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 1rem;
  color: white;
`;

const WelcomeText = styled.li`
  margin-right: auto;
  color: grey;
  padding-left: 20rem;
`;

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <WelcomeText>Welcome to the game store</WelcomeText>
        <li>dsdsds</li>
        <li>2</li>
        <li>eee</li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
