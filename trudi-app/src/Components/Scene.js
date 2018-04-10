import React from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import React3 from "react-three-renderer";

class Scene extends React.Component {
  constructor(props) {
    super(props);

    // props deconstruction
    const { scene } = props;
    const { orientation, position, cameraPosition } = scene;

    // constants
    this.cameraPosition = new THREE.Vector3(...cameraPosition);
    this.groupPosition = new THREE.Vector3(...position);

    // variables
    this.targetRotationOnMouseDown = 0;
    this.mouseX = 0;
    this.mouseXOnMouseDown = 0;
    this.targetRotation = orientation[1];

    this.state = {
      groupRotation: new THREE.Euler(...orientation)
    };
  }

  componentWillReceiveProps(nextProps) {
    // props deconstruction
    const { scene } = nextProps;
    const { orientation } = scene;

    this.targetRotation = orientation[1];
  }

  componentDidMount() {
    const { models } = this.props;
    const { container, group } = this.refs;

    container.addEventListener("mousedown", this._onDocumentMouseDown, false);
    container.addEventListener("touchstart", this._onDocumentTouchStart, false);
    document.addEventListener("touchmove", this._onDocumentTouchMove, false);

    // console.log({ models });

    group.add(...models);

    var axesHelper = new THREE.AxesHelper(5);
    group.add(axesHelper);
  }

  componentWillUnmount() {
    const container = this.refs.container;

    container.removeEventListener(
      "mousedown",
      this._onDocumentMouseDown,
      false
    );
    container.removeEventListener(
      "touchstart",
      this._onDocumentTouchStart,
      false
    );
    document.removeEventListener("touchmove", this._onDocumentTouchMove, false);
    document.removeEventListener("mousemove", this._onDocumentMouseMove, false);
    document.removeEventListener("mouseup", this._onDocumentMouseUp, false);
    document.removeEventListener("mouseout", this._onDocumentMouseOut, false);
  }

  _onDocumentMouseDown = event => {
    event.preventDefault();

    document.addEventListener("mousemove", this._onDocumentMouseMove, false);
    document.addEventListener("mouseup", this._onDocumentMouseUp, false);
    document.addEventListener("mouseout", this._onDocumentMouseOut, false);

    const { width } = this.props;

    const windowHalfX = width / 2;

    this.mouseXOnMouseDown = event.clientX - windowHalfX;
    this.targetRotationOnMouseDown = this.targetRotation;
  };

  _onDocumentMouseMove = event => {
    const { width } = this.props;

    const windowHalfX = width / 2;

    this.mouseX = event.clientX - windowHalfX;
    this.targetRotation =
      this.targetRotationOnMouseDown +
      (this.mouseX - this.mouseXOnMouseDown) * 0.02;
  };

  _onDocumentMouseUp = () => {
    document.removeEventListener("mousemove", this._onDocumentMouseMove, false);
    document.removeEventListener("mouseup", this._onDocumentMouseUp, false);
    document.removeEventListener("mouseout", this._onDocumentMouseOut, false);
  };

  _onDocumentMouseOut = () => {
    document.removeEventListener("mousemove", this._onDocumentMouseMove, false);
    document.removeEventListener("mouseup", this._onDocumentMouseUp, false);
    document.removeEventListener("mouseout", this._onDocumentMouseOut, false);
  };

  _onDocumentTouchStart = event => {
    if (event.touches.length === 1) {
      event.preventDefault();

      const { width } = this.props;

      const windowHalfX = width / 2;

      this.mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
      this.targetRotationOnMouseDown = this.targetRotation;
    }
  };

  _onDocumentTouchMove = event => {
    if (event.touches.length === 1) {
      event.preventDefault();

      const { width } = this.props;

      const windowHalfX = width / 2;

      this.mouseX = event.touches[0].pageX - windowHalfX;
      this.targetRotation =
        this.targetRotationOnMouseDown +
        (this.mouseX - this.mouseXOnMouseDown) * 0.05;
    }
  };

  _onAnimate = () => {
    const groupRotationY = this.state.groupRotation.y;
    const delta = Math.abs(groupRotationY - this.targetRotation);

    if (delta > 0.001) {
      this.setState({
        groupRotation: new THREE.Euler(
          0,
          groupRotationY + (this.targetRotation - groupRotationY) * 0.05,
          0
        )
      });
    }
  };

  render() {
    const { width } = this.props;
    const height = width * 0.75;
    const { groupRotation } = this.state;

    const scene = (
      <div ref="container">
        <React3
          width={width}
          height={height}
          antialias
          pixelRatio={window.devicePixelRatio}
          mainCamera="mainCamera"
          clearColor={0xf0f0f0}
          onAnimate={this._onAnimate}
        >
          <scene ref="scene">
            <perspectiveCamera
              name="mainCamera"
              ref="camera"
              fov={50}
              aspect={width / height}
              near={1}
              far={1000}
              position={this.cameraPosition}
            >
              <pointLight color={0xffffff} intensity={0.8} />
            </perspectiveCamera>
            <group
              ref="group"
              position={this.groupPosition}
              rotation={groupRotation}
            />
          </scene>
        </React3>
      </div>
    );
    return scene;
  }

  static propTypes = {
    width: PropTypes.number.isRequired
  };
}

export default Scene;
