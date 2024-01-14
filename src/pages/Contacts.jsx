import React from "react";
import Header from "../components/Header";
import logo_style from "../utils/logo_style";
import Footer from "../components/Footer";
import s from "../style/home.module.css";
import MapComponent from "../components/MapComponent";
import y from "../style/map.module.css";

const Contacts = () => {
  const { header, footer } = logo_style;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        top: "5vw",
      }}
    >
      <main>
        <Header logo_style={header} />
        <div className={y.map_container}>
          <div className={y.contact_box}>
            <h2>Контакти</h2>
            <div className={y.addres_box}>
              <img
                style={{ width: "1vw", marginRight: "0.2vw" }}
                src="https://i0.wp.com/www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png?fit=724%2C724&ssl=1"
                alt=""
              />
              <h4>Адреса</h4>
            </div>
            <p>м. Вінниця, пл. Калічанська, 2</p>

            <div className={y.addres_box}>
              <img
                style={{
                  width: "1vw",
                  marginTop: "0.5vw",
                  marginRight: "0.2vw",
                }}
                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3433080/phone-icon-md.png"
                alt=""
              />
              <h4 style={{ marginTop: "2vw" }}>Телефони</h4>
            </div>
            <p>+380931010123</p>
            <p>+380681010124</p>

            <h4 style={{ marginTop: "2vw", paddingLeft: "0.5vw" }}>
              {" "}
              Робочий час
            </h4>
            <div className={y.addres_box} style={{ marginTop: "-1.5vw" }}>
              <img
                style={{
                  width: "1.5vw",
                }}
                src="https://cdn4.iconfinder.com/data/icons/game-62/512/16.png"
                alt=""
              />
              <p>
                10.00 - 22.00 <br />
              </p>
            </div>
          </div>
          <div className={y.map_box}>
            <MapComponent />
          </div>
        </div>

        <Footer logo_style={footer} />
      </main>
    </div>
  );
};

export default Contacts;
