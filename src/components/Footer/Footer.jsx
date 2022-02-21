import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <NavLink className="footer__nav--a" to="/characters">
          <FormattedMessage id="char" defaultMessage="personajes" />
        </NavLink>
        <NavLink className="footer__nav--a" to="/houses">
          <FormattedMessage id="houses" defaultMessage="casas" />
        </NavLink>
        <NavLink className="footer__nav--a" to="/chronology">
          <FormattedMessage id="chrono" defaultMessage="cronologia" />
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
