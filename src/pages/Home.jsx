import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo_style from "../utils/logo_style";
import s from "../style/home.module.css";
import sushi_icon from "../assets/ordered/sushi_icon.png";
import basket_icon from "../assets/ordered/basket_icon.png";
import feedback_icon from "../assets/ordered/feedback_icon.png";
import delivery_icon from "../assets/ordered/delivery_icon.png";
import phone from "../assets/phone.png";
import google_play from "../assets/google_play.png";
import app_store from "../assets/app_store.png";
import get_sushi_data from "../utils/get_sushi_data";
import DishCart from "../components/Dish_cart";
import { Pagination } from "@mui/material";
import PaginationComp from "../components/Pagination_comp";
import pagination_param from "../utils/pagination_param";
import { useRef } from "react";

const Home = () => {
  const { header, footer } = logo_style;
  const [dish, setDish] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount] = useState(8);
  const pag_param = new pagination_param(currentPage, pageCount, dish);

  useEffect(() => {
    setDish(get_sushi_data);
  }, []);

  const ref = useRef(null);
  const handleClick = (e) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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

        <div className={s.delivery_box}>
          <h1>
            <span>Найсмачніші суші</span> <br /> у твоєму місті
          </h1>
          <p className={s.del_box_text}>
            Кожен день ми працюємо, щоб ви мали можливісь відпочивати. Обирайте
            страви, які вам подобаються, про все інше ми подбаємо.
          </p>
          <ul>
            <li onClick={handleClick} className={s.del_btn}>
              Розпочати обирати
            </li>
          </ul>
        </div>
        <div className={s.cart_ordered}>
          <h2 className={s.main_text}>Як зробити замовлення?</h2>
          <ul className={s.work_list}>
            <li
              style={{
                display: "flex",
                flexDirection: "space-between",
                alignItems: "center",
                justifyContent: "center",
                width: "30vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4vw",
                  padding: "2vw",
                }}
              >
                <img src={sushi_icon} alt="" />
              </div>{" "}
              <h3>
                Обираєте <br />
                апетитні суші
                <br /> на сайті
              </h3>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "space-between",
                alignItems: "center",
                justifyContent: "center",
                width: "30vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4vw",
                  padding: "2vw",
                }}
              >
                <img src={basket_icon} alt="" />
              </div>{" "}
              <h3>
                Оформлюєте <br />
                замовлення
                <br /> через кошик
              </h3>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "space-between",
                alignItems: "center",
                justifyContent: "center",
                width: "30vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4vw",
                  padding: "2vw",
                }}
              >
                <img style={{}} src={feedback_icon} alt="" />
              </div>{" "}
              <h3>
                Обов'язково
                <br /> передзвонить
                <br /> наш менеджер
              </h3>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "space-between",
                alignItems: "center",
                justifyContent: "center",
                width: "30vw",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "4vw",
                  padding: "2vw",
                }}
              >
                <img style={{}} src={delivery_icon} alt="" />
              </div>{" "}
              <h3>
                Очікуєте
                <br /> доставку
                <br /> та смакуєте
              </h3>
            </li>
          </ul>
        </div>
        <div className={s.dish_container}>
          <h2
            ref={ref}
            style={{ color: "#07210f", fontSize: "42px" }}
            className={s.main_text}
          >
            Пропонуємо тільки найкраще
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: "3%",
            }}
          >
            <div className={s.dish_cart_container}>
              {pag_param.newDishArray.map((dish_data) => {
                return (
                  <div key={dish_data.id}>
                    {" "}
                    <DishCart dish_data={dish_data} />
                  </div>
                );
              })}
            </div>
            <PaginationComp
              countPoint={pag_param.countPoint}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        {}
        <div s className={s.delivery_box_2}>
          <img
            src={phone}
            alt=""
            style={{ width: "25%", paddingLeft: "7%", paddingBottom: "10%" }}
          />
          <div style={{ paddingLeft: "18%" }}>
            <h2>
              Завантажуйте <br /> мобільний додаток
            </h2>
            <div style={{ paddingLeft: "5%" }}>
              <a
                href="https://play.google.com/store/games?hl=uk&gl=US"
                target="_blank"
              >
                <img
                  className={s.icon_size}
                  src={google_play}
                  alt=""
                  style={{ marginRight: "7%", cursor: "pointer", width: "40%" }}
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank">
                <img
                  className={s.icon_size}
                  src={app_store}
                  alt=""
                  style={{
                    cursor: "pointer",
                    width: "40%",
                    borderRadius: "9%",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        {}
      </main>
      <Footer logo_style={footer} />
    </div>
  );
};

export default Home;
