// npm imports
import React from "react";
import { Header, Modal, Image } from "semantic-ui-react";
import sampleImage from "Images/sample-system.jpg";

const ModalWindow = props => {
  // console.log({ props });
  return (
    <Modal open={props.status} onClose={props.closeHandler}>
      <Modal.Header>System Detail</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={sampleImage} />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>Placeholder for system information</p>
          <p>Maybe a table?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalWindow;
