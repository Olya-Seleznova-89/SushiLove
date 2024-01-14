import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
} from "react-share";
import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import s from "../style/dish_cart.module.css";
const SocialModal = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        className={s.price_icon}
        onClick={handleClick}
      >
        <rect
          x="0.599609"
          width="28.0959"
          height="28.0959"
          rx="3.9022"
          fill="#2b5c3a"
        />
        <path
          d="M18.6517 15.9414C17.9251 15.9414 17.2674 16.242 16.7953 16.725L12.7148 14.3429C12.7817 14.1127 12.8195 13.8705 12.8195 13.6189C12.8195 13.3792 12.7844 13.1478 12.7235 12.9273L16.7732 10.6331C17.2467 11.13 17.9131 11.4412 18.6521 11.4412C20.0853 11.4412 21.2517 10.2754 21.2517 8.84139C21.2516 7.40805 20.0853 6.24219 18.6521 6.24219C17.2189 6.24219 16.0526 7.40805 16.0526 8.84139C16.0526 9.08121 16.0877 9.31256 16.1489 9.53354L12.0993 11.828C11.6257 11.3309 10.9592 11.0197 10.2203 11.0197C8.78696 11.0197 7.62109 12.1856 7.62109 13.6194C7.62109 15.0527 8.78696 16.2187 10.2203 16.2187C10.9474 16.2187 11.6045 15.9181 12.0771 15.4352L16.1571 17.8173C16.0905 18.0477 16.0523 18.2904 16.0523 18.5415C16.0523 19.9752 17.2186 21.1408 18.6516 21.1408C20.0851 21.1408 21.2514 19.9752 21.2514 18.5415C21.2514 17.1075 20.0851 15.9414 18.6517 15.9414Z"
          fill="white"
        />
      </svg>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            borderRadius: 1,
            width: "10%",
            p: 1,
            marginLeft: "30%",
          }}
        >
          <TelegramShareButton url={data.img} style={{ padding: "4%" }}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <ViberShareButton url={data.img} style={{ padding: "4%" }}>
            <ViberIcon size={32} round />
          </ViberShareButton>
          <TwitterShareButton url={data.img} style={{ padding: "4%" }}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Box>
      </Popper>
    </div>
  );
};

export default SocialModal;
