import { connect } from "react-redux";
import ReduxCom from "../../components/redux";
import { addPlayer } from "../../redux/actions/playerActions"

const mapStateToProps = (state, ownProps) => {
  return {
    playerList: state.players,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    btnClickAddPlayer: () => {
      dispatch(addPlayer({ id: 3, name: '欧文', number: 2, }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCom);
