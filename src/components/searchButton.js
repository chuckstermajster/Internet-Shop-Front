import React from "react";
import styled from "styled-components";
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2";

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

const SearchButton = () => {
  return (
    <StyledSearchButton type="submit">
      <SearchAlt2 size="30" />
    </StyledSearchButton>
  );
};

export default SearchButton;
