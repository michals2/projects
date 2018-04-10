// npm imports
import React from "react";
import Measure from "react-measure";

// local imports
import SceneContainer2 from "Components/SceneContainer2";

const SceneContainer1 = props => {
  return (
    <Measure>
      {({ width }) => <SceneContainer2 {...props} width={width} />}
    </Measure>
  );
};

export default SceneContainer1;
