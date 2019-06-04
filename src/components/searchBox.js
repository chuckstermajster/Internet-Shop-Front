import React from "react";
import SearchBar from "./searchBar";
import styled, { css } from "styled-components";

const StyledFlexBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid green;
  margin-bottom: 3rem;
`;

const StyledSearchBoxWrapper = styled.div`
  margin-left: auto;
  margin-top: 2rem;
  border: 0.1rem solid red;
  padding: 0;
  position: relative;
`;

const ListedItem = styled.li`
  text-align: center;
  padding: 0.2rem;

  ${props =>
    props.type === "support" &&
    css`
      border-right: 0.1rem solid grey;
      color: blue;
      padding-right: 0.6rem;
    `}

  ${props =>
    props.type === "address" &&
    css`
      color: grey;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      border-right: 0.1rem solid grey;
    `}

    ${props =>
      props.type === "contact" &&
      css`
        color: grey;
        padding-left: 0.6rem;
      `}
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  padding: 0.6rem 0.6rem 0.6rem 0;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  color: grey;
  text-transform: uppercase;
`;

const SearchBox = () => {
  return (
    <StyledFlexBoxWrapper>
      <StyledSearchBoxWrapper>
        <Ul>
          <ListedItem type="support">CUSTOMER SUPPORT</ListedItem>
          <ListedItem type="address">1800-000-GAMEWORLD</ListedItem>
          <ListedItem type="contact">Chat with us</ListedItem>
        </Ul>
        <SearchBar />
      </StyledSearchBoxWrapper>
    </StyledFlexBoxWrapper>
  );
};

export default SearchBox;
