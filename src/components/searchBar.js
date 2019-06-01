import React from "react";
import styled from "styled-components";
import SearchButton from "./searchButton";

const StyledContainer = styled.div`
  display: inline-flex;
  font-size: 2rem;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 0.2rem 3.2rem;
  outline: 0;
`;

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledInput type="search" placeholder="search for game..." />
      <SearchButton />
    </StyledContainer>
  );
};

export default SearchBar;
