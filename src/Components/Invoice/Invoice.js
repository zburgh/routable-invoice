import React, { Component } from "react";

import InvoiceHeader from "./InvoiceHeader";
import InvoiceTable from "./InvoiceTable";
import InvoiceFooter from "./InvoiceFooter";

import "./Invoice.css";

class Invoice extends Component {
  render() {
    return (
      <div className="invoice-page-template">
        <div className="page-container">
          <InvoiceHeader />
          <InvoiceTable />
          <InvoiceFooter />
        </div>
      </div>
    );
  }
}

export default Invoice;
