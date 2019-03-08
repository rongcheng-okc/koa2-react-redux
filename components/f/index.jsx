import React, { Component } from "react";
import PropTypes from "prop-types";

const F = ({ btnName0, btnName1, btnClick }) => {
  return <div>
    <button onClick={btnClick}>{btnName0}</button>
    <button>{btnName1}</button>
  </div>
};

F.propTypes = {
  btnClick: PropTypes.func.isRequired,
  btnName0: PropTypes.string.isRequired,
  btnName1: PropTypes.string.isRequired
};

export default F;
