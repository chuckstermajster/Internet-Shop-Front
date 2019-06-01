import React from "react";
import NavBar from "./navBar";
import SearchBox from "./searchBox";

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBox />
      </div>
    );
  }
}
export default MainComponent;
