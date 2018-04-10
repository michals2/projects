const pi = Math.PI;

function System(
  name,
  id,
  orientation = Math.random() * 2 * Math.PI,
  description = "This is some placeholder text"
) {
  this.name = name;
  this.id = id;
  this.description = description;
  this.orientation = orientation;
}

export const controlPanelItems = [
  {
    groupName: "IT Network",
    groupID: "0",
    systems: [
      new System("Electronic Charging Display System", "0-0", pi / 4),
      new System("Exchange Email Server", "0-1", pi / 2),
      new System("LTE/Wi-Fi Router", "0-2", -pi / 4)
    ]
  },
  {
    groupName: "Voyage Network",
    groupID: "1",
    systems: [
      new System("Electronic Charging Display System", "1-0"),
      new System("GPS", "1-1"),
      new System("Heading Sensor", "1-2"),
      new System("Weather Sensor", "1-3"),
      new System("Radar", "1-4"),
      new System("AIS Transponder", "1-5"),
      new System("SiriusXM Satellite Weather and Radio", "1-6")
    ]
  },
  {
    groupName: "Engineering Network",
    groupID: "2",
    systems: [
      new System("Electronic Charging Display System", "2-0"),
      new System("Autopilot", "2-1"),
      new System("Depth, Speed, Temperature Sensor", "2-2")
    ]
  }
];
