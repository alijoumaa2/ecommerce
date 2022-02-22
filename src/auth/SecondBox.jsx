import React from "react";
import promo from "../assets/promo.png";
function Promo() {
  return (
    <div className="promo-container">
      <div className="container mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <div className="subscribe-container">
              <button>Login</button>
            </div>
            <p>Don't have an account ? Register instead</p>
          </div>
          <div className="subscribe-container" style={{ marginBottom: "1rem" }}>
            <input type="email" placeholder="username" />
          </div>
          <div className="subscribe-container">
            <input type="email" placeholder="password" />
          </div>
        </div>
        <div className="promo-image">
          <img src={promo} alt="Promo" style={{ marginRight: "20rem" }} />
        </div>
      </div>
    </div>
  );
}

export default Promo;
