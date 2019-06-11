import React, { Component } from "react";
import "./TableCell.css";

class TableCell extends Component {
  render() {
    return <td>{this.props.title}</td>;
  }
}

export default TableCell;
