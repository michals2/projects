// npm imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// local imports
import SceneContainer3 from "./SceneContainer3";
import * as actions from "Redux/actions/actions";

function mapStateToProps(state, props) {
  return {
    scene: state.scene[props.sceneName]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneContainer3);
