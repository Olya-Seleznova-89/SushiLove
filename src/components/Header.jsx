import React from "react";
import s from "../style/header.module.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <div className={s.header_container}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo logo_style={props.logo_style} />
      </Link>

      <ul className={s.navHeader}>
        <li>
          <Link to="/" className={s.link}>
            Головна
          </Link>
        </li>

        <li>
          <Link to="/menu" className={s.link}>
            Меню
          </Link>
        </li>

        <li>
          <Link to="/review" className={s.link}>
            Відгуки
          </Link>
        </li>
        <li>
          <Link to="/contact" className={s.link}>
            Контакти
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
