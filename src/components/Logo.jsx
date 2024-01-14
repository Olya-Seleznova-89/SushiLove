import React from "react";
import s from "../style/header.module.css";
import sushi from "../assets/logo_sushi.png";
const Logo = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{
          width: "3.5vw",
          height: "1.8vw",
          borderRadius: "100%",
        }}
        src={sushi}
        alt=""
      />
      <h1 className={s.logo}>
        <span style={{ color: `${props.logo_style.sushi}` }}>SUSHI</span>
        <span style={{ color: `${props.logo_style.love}` }}>LOVE</span>
      </h1>
    </div>
  );
};

export default Logo;
