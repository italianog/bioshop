import React from "react";
import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CONSERVE</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">DOLCI</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">ORTAGGI</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">SALSE</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">PREPARATI</h1>
          <span className="subtitle">SHOP</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
