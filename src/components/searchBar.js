import React from "react";
import styled from "styled-components";
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2";

const StyledContainer = styled.div`
  display: inline-flex;
  font-size: 2rem;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0.2rem 0.5rem;
  outline: 0;
`;

const StyledSearchButton = styled.button`
  border: none;
  border-radius: 0 0.5em 0.5em 0;
  background-color: grey;
  border-left: 0;
  padding: 0 0.75em;
  color: white;
  font-weight: bold;
  outline: 0;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledInput type="search" placeholder="search for game..." />
      <StyledSearchButton type="submit">
        <SearchAlt2 size="30" />
      </StyledSearchButton>
    </StyledContainer>
  );
};

export default SearchBar;
