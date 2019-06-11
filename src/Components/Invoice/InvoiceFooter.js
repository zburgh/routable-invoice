import React, { Component } from "react";
import "./InvoiceFooter.css";

class InvoiceFooter extends Component {
  render() {
    return (
      <div className="invoice-table-totals">
        <div className="invoice-table-totals-cell">
          <div />
        </div>
        <div className="invoice-table-totals-cell">
          <div className="grey-text-50">Subtotal</div>
        </div>
        <div className="invoice-table-totals-cell">
          <div>$6,075.00</div>
        </div>
        <div className="invoice-table-totals-cell">
          <div />
        </div>
        <div className="invoice-table-totals-cell">
          <div className="grey-text-50">Tax (10%)</div>
        </div>
        <div className="invoice-table-totals-cell">
          <div>$6.75</div>
        </div>
        <div className="invoice-table-totals-cell">
          <div />
        </div>
        <div className="invoice-table-totals-cell">
          <div className="grey-text-50">Discount</div>
        </div>
        <div className="invoice-table-totals-cell">
          <div>-$1,500.00</div>
        </div>
        <div className="invoice-table-totals-cell">
          <div />
        </div>
        <div className="invoice-table-totals-cell">
          <div className="grey-text-50">Total</div>
        </div>
        <div className="invoice-table-totals-cell">$4,581.75</div>
      </div>
    );
  }
}

export default InvoiceFooter;
