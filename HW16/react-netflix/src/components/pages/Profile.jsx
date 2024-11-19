import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/profile.css';

function Profile() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="profile">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src="/img/netflix-logo.png" alt="logo" />
      </div>
      <div className="avatar-pr">
        <img src="/img/avatar.png" alt="avatar" />
      </div>
      <div className="text-p">
        <h1>Name:</h1>
        <h1>Nila</h1>
      </div>
      <div className="second-text">
        <h1>Surname:</h1>
        <h1>Alonso</h1>
      </div>
      <div className="film">
        <h1>Selected films:</h1>
        <div className="film-img">
          <img src="/img/Money.png" alt="Money" />
          <img src="/img/Rain.png" alt="Rain" />
          <img src="/img/Year.png" alt="Year" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
