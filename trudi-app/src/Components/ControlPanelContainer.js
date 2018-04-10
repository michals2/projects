// npm imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// local imports
import * as actions from "Redux/actions/actions";
import ControlPanel from "Components/ControlPanel";

function mapStateToProps(state, props) {
  return {
    controlPanelState: state.controlPanel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
