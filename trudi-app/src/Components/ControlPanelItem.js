// npm imports
import React from "react";
import { List, Button, Icon } from "semantic-ui-react";

const ControlPanelItem = props => {
  // console.log({ props });
  return (
    <List.Item>
      <Button icon size="mini" onClick={() => props.openModal(props.system.id)}>
        <Icon name="search" />
      </Button>

      <Button size="mini" onClick={props.setSceneOrientation}>
        {props.system.name}
      </Button>
    </List.Item>
  );
};

export default ControlPanelItem;
