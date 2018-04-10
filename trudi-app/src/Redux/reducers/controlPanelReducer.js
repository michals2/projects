import { controlPanel } from "Redux/store/initialState";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionTypes";

export default function sceneReducer(state = controlPanel, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { modalWindow: { active: true, system: action.systemID } };
    case CLOSE_MODAL:
      return { modalWindow: { ...state.modalWindow, active: false } };

    default:
      return state;
  }
}
