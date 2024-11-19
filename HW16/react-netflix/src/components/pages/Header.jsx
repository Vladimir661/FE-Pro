import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogIn from "./logIn";
import SearchBar from "./SearchBar";

function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-UA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <div className="wrapper">
        <div className="logo-name">
          <img src="/img/netflix-logo.png" alt="netflix-logo" />
          <h2 className="logo-text">
            <span className="inter-medium">{formattedDate}</span>
          </h2>
        </div>
        <div className="search-avatar">
          <SearchBar />
          <LogIn />
        </div>
      </div>
    </header>
  );
}

export default Header;
