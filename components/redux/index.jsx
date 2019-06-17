import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-weui';

const ReduxCom = ({ playerList, btnClickAddPlayer, }) => {
  const s = JSON.stringify(playerList);
  return <div>
    <Button onClick={() => btnClickAddPlayer()}>btnClickAddPlayer</Button>
    <p>{s}</p>
  </div>
};

ReduxCom.propTypes = {
  btnClickAddPlayer: PropTypes.func.isRequired,
  playerList: PropTypes.array.isRequired,
};

export default ReduxCom;
