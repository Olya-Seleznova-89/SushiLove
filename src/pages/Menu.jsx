import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import logo_style from "../utils/logo_style";
import Footer from "../components/Footer";
import s from "../style/home.module.css";
import get_sushi_data from "../utils/get_sushi_data";
import DishCart from "../components/Dish_cart";
import { Pagination } from "@mui/material";
import PaginationComp from "../components/Pagination_comp";
import pagination_param from "../utils/pagination_param";
import { useRef } from "react";

const Menu = () => {
  const { header, footer } = logo_style;
  const [dish, setDish] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount] = useState(12);
  const pag_param = new pagination_param(currentPage, pageCount, dish);

  useEffect(() => {
    setDish(get_sushi_data);
  }, []);

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
        <div className={s.dish_container}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: "3%",
              paddingTop: "7%",
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

        <Footer logo_style={footer} />
      </main>
    </div>
  );
};

export default Menu;
