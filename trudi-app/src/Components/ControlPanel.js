// npm imports
import React from "react";
import { Segment, Label, List, Button, Header, Modal } from "semantic-ui-react";

// local imports
import { controlPanelItems } from "HelperFunctions/controlPanelItems.js";
import ControlPanelItem from "Components/ControlPanelItem.js";
import ModalWindow from "Components/ModalWindow.js";

const ControlPanel = props => {
  // console.log({ props });
  return (
    <div>
      <ModalWindow
        status={props.controlPanelState.modalWindow.active}
        closeHandler={props.actions.closeModal}
      />
      {controlPanelItems.map(group => (
        <Segment key={group.groupID}>
          <Label attached="top" color="blue">
            {group.groupName}
          </Label>
          <List>
            {group.systems.map(system => (
              <ControlPanelItem
                key={system.id}
                system={system}
                openModal={props.actions.openModal}
                setSceneOrientation={() =>
                  props.actions.setSceneOrientation(system.orientation)
                }
              />
            ))}
          </List>
        </Segment>
      ))}
      <Button size="mini" onClick={props.actions.resetToInitialState}>
        Reset
      </Button>
    </div>
  );
};

export default ControlPanel;
