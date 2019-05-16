import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-weui';

const ReduxCom = ({ btnName0, btnName1, btnClick }) => {
  return <div>
    <Button onClick={btnClick}>{btnName0}</Button>
    <Button>{btnName1}</Button>
  </div>
};

ReduxCom.propTypes = {
  btnClick: PropTypes.func.isRequired,
  btnName0: PropTypes.string.isRequired,
  btnName1: PropTypes.string.isRequired
};

export default ReduxCom;
