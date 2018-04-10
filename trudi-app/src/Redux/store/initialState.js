// export const SET_SCENE_ORIENTATION = "SET_SCENE_ORIENTATION";

export const scene = {
  scene1: {
    sceneName: "TRUDI",
    orientation: [0, 0.5, 0],
    position: [0, 0, 0],
    cameraPosition: [0, 1, 8],
    sceneLoaded: false,
    objects: [
      {
        id: "1-1",
        name: "main",
        orientation: [1, 0, 0],
        position: [0, 0, 0],
        scale: [1, 1, 1],
        color: 0xb7b7b7,
        transparent: false
      }
    ]
  },
  scene2: {
    sceneName: "Boat",
    orientation: [0, -0.5, 0],
    position: [0, -1, 0],
    cameraPosition: [0, 1, 60],
    sceneLoaded: false,
    objects: [
      {
        id: "2-1",
        name: "main",
        orientation: [0, 0, 0],
        position: [0, 0, 0],
        scale: [1, 1, 1],
        color: 0xfad6a5,
        transparent: true
      },
      {
        id: "2-2",
        name: "Boat system 1 highlight",
        orientation: [0, 0, 0],
        position: [1.3, 3.3, 0.2],
        scale: [0.5, 0.5, 0.5],
        color: 0xf1f442,
        transparent: true
      },
      {
        id: "2-2",
        name: "Boat system 2",
        orientation: [0, 0, 0],
        position: [-1, 2, -0.5],
        scale: [1, 0.2, 1],
        color: 0xc40000,
        transparent: false
      }
    ]
  }
};

export const controlPanel = {
  modalWindow: {
    active: false,
    system: ""
  }
};
