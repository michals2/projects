// npm imports
import React from "react";

// local imports
import Scene from "Components/Scene";
import importModels from "HelperFunctions/importModels.js";

const SceneContainer3 = props => {
  let models;
  if (!props.scene.sceneLoaded) {
    // console.log("loading models");
    models = importModels(props.scene.objects);
    props.actions.setSceneLoaded(props.sceneName);
  }
  return <Scene {...props} models={models} />;
};

export default SceneContainer3;
