import React from "react";
import NavBar from "./navBar";
import SearchBar from "./searchBar";

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
      </div>
    );
  }
}
export default MainComponent;
