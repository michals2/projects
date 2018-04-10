import { scene } from "Redux/store/initialState";
import {
  SET_SCENE_ORIENTATION,
  SET_SCENE_LOADED,
  RESET_TO_INITAL_STATE
} from "../actions/actionTypes";

const { Seq } = require("immutable");

export default function sceneReducer(state = scene, action) {
  const imState = Seq(state);
  const imInitialState = Seq(scene);
  const sceneNameMap = { scene1: "TRUDI", scene2: "Boat" };
  const sceneName = sceneNameMap[action.sceneName];

  switch (action.type) {
    case SET_SCENE_ORIENTATION:
      return imState
        .map(x => ({
          ...x,
          orientation: [x.orientation[0], action.orientation, x.orientation[2]]
        }))
        .toObject();

    case SET_SCENE_LOADED:
      return imState
        .map(x => (x.sceneName === sceneName ? { ...x, sceneLoaded: true } : x))
        .toObject();

    case RESET_TO_INITAL_STATE:
      return imInitialState.map(x => ({ ...x, sceneLoaded: true })).toObject();

    default:
      return state;
  }
}
