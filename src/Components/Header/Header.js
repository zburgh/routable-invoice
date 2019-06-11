import React, { Component } from "react";
import "./Header.css";
import arrowLeft from "../../Images/arrow-left.svg";
import download from "../../Images/download.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <button>
          <img src={arrowLeft} />
        </button>
        <h3>
          Invoices \ Coca-Cola \ <b className="grey-text-50">#1052</b>
        </h3>
        <button>
          <img src={download} />
        </button>
        <button className="primary">Pay invoice for $4,581.75</button>
      </header>
    );
  }
}

export default Header;
