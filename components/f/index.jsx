import React, { Component } from "react";
import PropTypes from "prop-types";

const F = ({ btnName, btnName1, btnClick }) => {
  return <div>
    <button onClick={btnClick}>{btnName1}</button>
    <button>{btnName}</button>
  </div>
};

F.propTypes = {
  btnClick: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired
};

export default F;
