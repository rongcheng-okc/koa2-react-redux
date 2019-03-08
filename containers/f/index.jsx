import { connect } from "react-redux";
import F from "../../components/f";
import { changeName0, changeName1 } from "../../redux/actions"

const mapStateToProps = (state, ownProps) => {
  return {
    btnName0: state.btnName0.name,
    btnName1: state.btnName1.name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    btnClick: () => {
      setTimeout(() => {
        dispatch(changeName0('OKC'))
      }, 5000);
      dispatch(changeName1('YGY'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F);
