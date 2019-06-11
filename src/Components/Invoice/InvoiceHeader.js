import React, { Component } from "react";
import "./InvoiceHeader.css";

import logo from "../../Images/google_logo.svg";

class InvoiceHeader extends Component {
  render() {
    return (
      <div>
        <h1>Invoice</h1>
        <div className="invoice-header">
          <div className="invoice-details">
            <h4 className="grey-text-50">Invoice Number</h4>
            <h4>1052</h4>
            <h4 className="grey-text-50">Invoice Date</h4>
            <h4>May 24th, 2019</h4>
            <h4 className="grey-text-50">Invoice Due</h4>
            <h4>June 23rd, 2019</h4>
            <h4 className="grey-text-50">Terms</h4>
            <h4>Net 30</h4>
          </div>
          <div>
            <img src={logo} className="company-logo" />
            <h4 className="grey-text-50">
              Google LLC
              <br />
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA 94043
              <br />
              ar@google.com
            </h4>
          </div>
        </div>
        <div className="billto">
          <h4 className="grey-text-50">Invoice For</h4>
          <h2>James Lee</h2>
          <h3>Coca-Cola</h3>
        </div>
      </div>
    );
  }
}

export default InvoiceHeader;
