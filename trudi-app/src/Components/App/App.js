// npm imprts
import React from "react";
import { Grid, Segment, Label } from "semantic-ui-react";

// local imports
import "./App.css";
import ControlPanelContainer from "Components/ControlPanelContainer";
import SceneContainer1 from "Components/SceneContainer1.js";
// import Viewer2 from "Components/Viewer2.js";

const App = () => (
  <div style={{ padding: 20 }}>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column mobile={8} tablet={6} computer={4}>
          <ControlPanelContainer />
        </Grid.Column>

        <Grid.Column
          mobile={8}
          tablet={10}
          computer={12}
          verticalAlign="middle"
        >
          <Grid columns={2} divided stackable>
            <Grid.Column>
              <Segment textAlign="center">
                <Label attached="top" color="black">
                  TRUDI
                </Label>
                <SceneContainer1 sceneName={"scene1"} />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment textAlign="center">
                <Label attached="top" color="black">
                  Boat
                </Label>
                <SceneContainer1 sceneName={"scene2"} />
                {/* <Viewer2 height={200} sceneName={"scene1"} /> */}
              </Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
