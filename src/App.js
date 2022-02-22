import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";
import Home from "./components/Home";
import "./scss/index.scss";

import Cart from "./components/Cart";
import Product from "./components/Product";
import Products from "./components/Products";
import Promo from "./components/Promo";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app">
      {/* <ScrollTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Products />
      <Choose />

      <Promo />
      <Footer /> */}
      {/* <Product></Product> */}
      {/* <Cart></Cart> */}
      {/* <Register></Register> */}
      <Login></Login>
    </div>
  );
}

export default App;
