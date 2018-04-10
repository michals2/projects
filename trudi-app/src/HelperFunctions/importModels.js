// npm imports
import * as THREE from "three";

// yacht model imports
import diesel_engine from "Models/JSON/yacht/diesel_engine.json"
import props_and_rudders from "Models/JSON/yacht/props_and_rudders.json"
import yacht_full_scale from "Models/JSON/yacht/yacht_full_scale.json"

// TRUDI model imports
import fantom18_radar from "Models/JSON/TRUDI/voyage-network/fantom18_radar.json"
// import glonass_antenna from "Models/JSON/TRUDI/voyage-network/glonass_antenna.json"
// import gmi_20_sensor_display from "Models/JSON/TRUDI/voyage-network/gmi_20_sensor_display.json"
// import gps_antenna from "Models/JSON/TRUDI/voyage-network/gps_antenna.json"
// import vhf_210_radio from "Models/JSON/TRUDI/voyage-network/vhf_210_radio.json"

// organize models
const models = {
  "1-1": fantom18_radar,
  "2-1": props_and_rudders,
  "2-2": yacht_full_scale,
  "2-3": diesel_engine
};

const loader = new THREE.JSONLoader();

function createMaterial(color, transparent) {
  const opacity = transparent ? 0.8 : 1;
  return new THREE.MeshPhongMaterial({
    color,
    opacity,
    transparent: true
  });
}

const importModels = (objects, cb) => {
  return objects.map(object => {
    const { color, transparent, position, scale, orientation, id } = object;

    const json = loader.parse(models[id]);
    const material = createMaterial(color, transparent);

    const mesh = new THREE.Mesh(json.geometry, material);
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    mesh.rotation.set(...orientation);

    return mesh;
  });
};

export default importModels;
