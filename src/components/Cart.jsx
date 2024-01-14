import React, { useState, useEffect } from "react";
import { useCart } from "../utils/context";
import "../index.css";
import s from "../style/cart.module.css";
import EmptyCart from "./Empty_cart";
import Plus from "../assets/icon-plus.png";
import Minus from "../assets/icon_minus.png";
const CartModal = () => {
  const {
    cartItems,
    removeFromCart,
    increaseCount,
    reduceCount,
    totalCount,
    totalPrice,
  } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [total_count, setTotalCount] = useState(0);
  const [total_price, setTotalPrice] = useState(0);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const chackCountIcon = () => {
    return cartItems.length > 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    chackCountIcon();
    setTotalCount(totalCount);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <>
      <div className={s.cart_icon_box} onClick={openModal}>
        <img
          style={{ width: "100%" }}
          src="https://cdn-icons-png.flaticon.com/512/548/548990.png
          "
          alt=""
        />
        {isCartEmpty && (
          <div
            style={{
              width: "35%",
              textAlign: "center",
              background: "rgb(201, 41, 31)",
              borderRadius: "50%",
              position: "absolute",
              top: "55px",
              right: "48px",
            }}
          >
            {total_count}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className={s.modal} style={{}} onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <div className={s.cart_header}>
              <h2 style={{ color: "rgb(101, 25, 16)" }}>Ваше замовлення</h2>
              <img
                src="https://static.thenounproject.com/png/1130065-200.png"
                alt=""
                onClick={closeModal}
              />
            </div>

            {!isCartEmpty && <EmptyCart />}
            {isCartEmpty && (
              <>
                <table className={s.price_table}>
                  <thead>
                    <tr>
                      <th className={s.image}></th>
                      <th className={s.name}>Назва товару товара</th>
                      <th className={s.price}>Ціна, грн</th>
                      <th className={s.count_box}>К-ть</th>
                      <th className={s.total_price}>Вартість</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className={s.image}>
                          <img src={item.img} alt="" />
                        </td>
                        <td
                          className={s.name}
                          style={{ color: "rgb(96, 30, 19)" }}
                        >
                          {item.name}
                        </td>
                        <td className={s.price}>{item.price}</td>
                        <td className={s.count_box}>
                          <img
                            className={s.nav_icon}
                            src={Minus}
                            alt=""
                            onClick={() => reduceCount(item.id)}
                          />
                          <span className={s.count}>{item.count}</span>
                          <img
                            className={s.nav_icon}
                            src={Plus}
                            alt=""
                            onClick={() => increaseCount(item.id)}
                          />{" "}
                        </td>
                        <td className={s.total_price}>
                          {item.price * item.count}
                        </td>
                        <td>
                          <img
                            className={s.remove_icon}
                            src="https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-24.png"
                            alt=""
                            onClick={() => removeFromCart(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={s.pay_info}>
                  <p> Сума до оплати: {total_price} грн</p>
                  <button className={s.pay}>Оплатити</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
