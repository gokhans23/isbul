import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <h1>Merhaba! Sana nasıl yardımcı olabiliriz?</h1>
      <p className="subtitle">
        isbul.net ile ilgili aklına takılan soruların cevaplarını bu
        <br />
        <span>sayfada bulabilirsin.</span>
      </p>
      <div className="search-bar">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Aramak için kelime girin" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
