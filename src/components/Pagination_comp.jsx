import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#8e183d",
      main: "#8e183d",
      dark: "#8e183d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const PaginationComp = ({ countPoint, currentPage, setCurrentPage }) => {
  return (
    <div style={{ margin: "4% 0" }}>
      <ThemeProvider theme={theme}>
        <Pagination
          color="primary"
          count={countPoint}
          page={currentPage}
          siblingCount={1}
          size="large"
          onChange={(_, number) => {
            setCurrentPage(number);
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default PaginationComp;
