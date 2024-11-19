import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarHeader from "/img/avatar.png";

function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleAvatarClick = () => {
    navigate("/profile");
  };

  return (
    <div>
      {isLoggedIn ? (
        <img
          src={AvatarHeader}
          alt="Avatar"
          onClick={handleAvatarClick}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <button
          className="loginButton inter-medium"
          onClick={handleLoginClick}
        >
          Log in
        </button>
      )}
    </div>
  );
}

export default LogIn;
