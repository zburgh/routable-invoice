import React, { Component } from "react";

import InvoiceHeader from "./InvoiceHeader";
import InvoiceTable from "./InvoiceTable";
import InvoiceFooter from "./InvoiceFooter";

import "./Invoice.css";

class Invoice extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="invoice-border" />
        <InvoiceHeader />
        <InvoiceTable />
        <InvoiceFooter />
      </div>
    );
  }
}

export default Invoice;
