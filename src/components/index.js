import React from "react";
import NavBar from "./navBar";
import SearchBox from "./searchBox";
import MainNavigation from "./mainNavigation";
import styled from "styled-components";

const Jumbotron = styled.div`
  border: 1px solid blue;
  margin: auto;
  padding: 0 10rem 0 10rem;
`;

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron>
          <SearchBox />
          <MainNavigation />
        </Jumbotron>
      </div>
    );
  }
}
export default MainComponent;
