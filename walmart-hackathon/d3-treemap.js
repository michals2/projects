class Treemap extends React.Component {
  static color = d3.scale.category20c();

  render() {
    const treemap = d3.layout
      .treemap()
      .size([960, 500])
      .sticky(true)
      .value(d => d.size)(this.props.root);

    return (
      <div
        style={{
          position: "relative",
          width: "960px",
          height: "500px",
          left: "10px",
          top: "10px"
        }}
      >
        {treemap.map(n =>
          <div
            className="node"
            style={{
              background: n.children ? Treemap.color(n.name) : null,
              left: `${n.x}px`,
              top: `${n.y}px`,
              width: `${Math.max(0, n.dx - 1)}px`,
              height: `${Math.max(0, n.dy - 1)}px`
            }}
          >
            {n.children ? null : n.name}
          </div>
        )}
      </div>
    );
  }
}

d3.json(
  "https://gist.githubusercontent.com/mbostock/1093025/raw/490fffd1ae637d3275aa9eaa8b0487147717dd40/flare.json",
  function(error, root) {
    ReactDOM.render(
      <Treemap root={root} />,
      document.getElementById("container")
    );
  }
);
