import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-bar">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        size="2xl"
        onClick={toggleSearch}
      />
      <div
        className={`search-input-container ${
          isSearchActive ? "active" : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchBar;
