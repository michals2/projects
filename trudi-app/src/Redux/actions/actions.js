import * as types from "./actionTypes";

export function setSceneOrientation(orientation, model) {
  return { type: types.SET_SCENE_ORIENTATION, orientation, model };
}

export function setSceneLoaded(sceneName) {
  return { type: types.SET_SCENE_LOADED, sceneName };
}

export function resetToInitialState() {
  return { type: types.RESET_TO_INITAL_STATE };
}

export function openModal(systemID) {
  return { type: types.OPEN_MODAL, systemID };
}
export function closeModal() {
  return { type: types.CLOSE_MODAL };
}
