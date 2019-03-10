import React from "react";
import PropTypes from "prop-types";

const ReduxCom = ({ btnName0, btnName1, btnClick }) => {
  return <div>
    <button onClick={btnClick}>{btnName0}</button>
    <button>{btnName1}</button>
  </div>
};

ReduxCom.propTypes = {
  btnClick: PropTypes.func.isRequired,
  btnName0: PropTypes.string.isRequired,
  btnName1: PropTypes.string.isRequired
};

export default ReduxCom;
