import React from 'react';
import { connect } from "react-redux";
import RdeuxThunkCom from '../../components/redux-thunk';
import { asyncChangeValue } from '../../redux/asyncActions';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.asyncValue.name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeValue: (value) => {
        console.log(77);
        dispatch(asyncChangeValue(value))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RdeuxThunkCom);