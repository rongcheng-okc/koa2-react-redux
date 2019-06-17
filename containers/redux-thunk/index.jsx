import React from 'react';
import { connect } from "react-redux";
import RdeuxThunkCom from '../../components/redux-thunk';
import { addFruit } from '../../redux/actions/fruitActions';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.fruits
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFruit: (value) => {
        dispatch(addFruit(value))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RdeuxThunkCom);