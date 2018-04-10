import { combineReducers } from "redux";
import scene from "./sceneReducer";
import controlPanel from "./controlPanelReducer";

const rootReducer = combineReducers({
  scene,
  controlPanel
});

export default rootReducer;
