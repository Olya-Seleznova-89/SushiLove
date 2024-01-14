import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { CartProvider } from "./utils/context";
import CartModal from "./components/Cart";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <CartModal />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/review" element={<Reviews />} />
          </Routes>
        
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
