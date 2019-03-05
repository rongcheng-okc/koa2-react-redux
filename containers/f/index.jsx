import { connect } from "react-redux";
import F from "../../components/f";

const mapStateToProps = (state, ownProps) => {
  return {
    btnName: state.btnName,
    btnName1: state.btnName1
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    btnClick: () => {
      console.log(88);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F);
