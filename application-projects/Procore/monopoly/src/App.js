import React, { Component } from "react";
import "./App.css";

const boardData = [
  {
    name: "Go",
    type: "go",
    corner: true
  },
  {
    name: "Mediterranean Avenue",
    type: "property",
    cost: 60,
    color: "#955438",
    rent: [2, 10, 30, 90, 160, 250],
    group: [1, 1, 2],
    house: 50
  },
  {
    name: "Community Chest",
    type: "community-chest"
  },
  {
    name: "Baltic Avenue",
    type: "property",
    cost: 60,
    color: "#955438",
    rent: [4, 20, 60, 180, 320, 450],
    group: [1, 2, 2],
    house: 50
  },
  {
    name: "Income Tax",
    type: "tax",
    cost: 200
  },
  {
    name: "Reading Railroad",
    type: "railroad",
    cost: 200,
    group: [9, 1, 4]
  },
  {
    name: "Oriental Avenue",
    type: "property",
    cost: 100,
    color: "#aae0fa",
    rent: [6, 30, 90, 270, 400, 550],
    group: [2, 1, 3],
    house: 50
  },
  {
    name: "Chance",
    type: "chance"
  },
  {
    name: "Vermont Avenue",
    type: "property",
    cost: 100,
    color: "#aae0fa",
    rent: [6, 30, 90, 270, 400, 550],
    group: [2, 2, 3],
    house: 50
  },
  {
    name: "Connecticut Avenue",
    type: "property",
    cost: 120,
    color: "#aae0fa",
    rent: [8, 40, 100, 300, 450, 600],
    group: [2, 3, 3],
    house: 50
  },
  {
    name: "Jail",
    type: "jail",
    corner: true
  },
  {
    name: "St. Charles Place",
    type: "property",
    cost: 140,
    color: "#d93a96",
    rent: [10, 50, 150, 450, 625, 750],
    group: [3, 1, 3],
    house: 100
  },
  {
    name: "Electric Company",
    type: "utility",
    cost: 150,
    group: [10, 1, 2]
  },
  {
    name: "States Avenue",
    type: "property",
    cost: 140,
    color: "#d93a96",
    rent: [10, 50, 150, 450, 625, 750],
    group: [3, 2, 3],
    house: 100
  },
  {
    name: "Virginia Avenue",
    type: "property",
    cost: 160,
    color: "#d93a96",
    rent: [12, 60, 180, 500, 700, 900],
    group: [3, 3, 3],
    house: 100
  },
  {
    name: "Pennsylvania Railroad",
    type: "railroad",
    cost: 200,
    group: [9, 2, 4]
  },
  {
    name: "St. James Place",
    type: "property",
    cost: 180,
    color: "#f7941d",
    rent: [14, 70, 200, 550, 750, 950],
    group: [4, 1, 3],
    house: 100
  },
  {
    name: "Community Chest",
    type: "community-chest"
  },
  {
    name: "Tennessee Avenue",
    type: "property",
    cost: 180,
    color: "#f7941d",
    rent: [14, 70, 200, 550, 750, 950],
    group: [4, 2, 3],
    house: 100
  },
  {
    name: "New York Avenue",
    type: "property",
    cost: 200,
    color: "#f7941d",
    rent: [16, 80, 220, 600, 800, 1000],
    group: [4, 3, 3],
    house: 100
  },
  {
    name: "Free Parking",
    type: "free-parking",
    corner: true
  },
  {
    name: "Kentucky Avenue",
    type: "property",
    cost: 220,
    color: "#ed1b24",
    rent: [18, 90, 250, 700, 875, 1050],
    group: [5, 1, 3],
    house: 150
  },
  {
    name: "Chance",
    type: "chance"
  },
  {
    name: "Indiana Avenue",
    type: "property",
    cost: 220,
    color: "#ed1b24",
    rent: [18, 90, 250, 700, 875, 1050],
    group: [5, 2, 3],
    house: 150
  },
  {
    name: "Illnois Avenue",
    type: "property",
    cost: 240,
    color: "#ed1b24",
    rent: [20, 100, 300, 750, 925, 1100],
    group: [5, 3, 3],
    house: 150
  },
  {
    name: "B. & O. Railroad",
    type: "railroad",
    cost: 200,
    group: [9, 3, 4]
  },
  {
    name: "Atlatic Avenue",
    type: "property",
    cost: 260,
    color: "#fef200",
    rent: [22, 110, 330, 800, 975, 1150],
    group: [6, 1, 3],
    house: 150
  },
  {
    name: "Ventura Avenue",
    type: "property",
    cost: 260,
    color: "#fef200",
    rent: [22, 110, 330, 800, 975, 1150],
    group: [6, 2, 3],
    house: 150
  },
  {
    name: "Water Works",
    type: "utility",
    cost: 150,
    group: [10, 2, 2]
  },
  {
    name: "Marvin Gardens",
    type: "property",
    cost: 280,
    color: "#fef200",
    rent: [24, 120, 360, 850, 1025, 1200],
    group: [6, 3, 3],
    house: 150
  },
  {
    name: "Go To Jail",
    type: "go-to-jail",
    corner: true
  },
  {
    name: "Pacific Avenue",
    type: "property",
    cost: 300,
    color: "#1fb25a",
    rent: [26, 130, 390, 900, 1100, 1275],
    group: [7, 1, 3],
    house: 200
  },
  {
    name: "North Carolina Avenue",
    type: "property",
    cost: 300,
    color: "#1fb25a",
    rent: [26, 130, 390, 900, 1100, 1275],
    group: [7, 2, 3],
    house: 200
  },
  {
    name: "Community Chest",
    type: "community-chest"
  },
  {
    name: "Pennsylvania Avenue",
    type: "property",
    cost: 320,
    color: "#1fb25a",
    rent: [28, 150, 450, 1000, 1200, 1400],
    group: [7, 3, 3],
    house: 200
  },
  {
    name: "Shortline",
    type: "railroad",
    cost: 200,
    group: [9, 4, 4]
  },
  {
    name: "Chance",
    type: "chance"
  },
  {
    name: "Park Place",
    type: "property",
    cost: 350,
    color: "#0072bb",
    rent: [35, 175, 500, 1100, 1300, 1500],
    group: [8, 1, 2],
    house: 200
  },
  {
    name: "Luxury Tax",
    type: "tax",
    cost: 100
  },
  {
    name: "Boardwalk",
    type: "property",
    cost: 400,
    color: "#0072bb",
    rent: [50, 200, 600, 1400, 1700, 2000],
    group: [8, 2, 2],
    house: 200
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
    this.state = {
      players: [],
      turn: 0,
      currentDiceRoll: null
    };
  }

  rollDice() {
    const newState = Object.assign(this.state);
    const currentDiceRoll = Math.ceil(Math.random() * 6);

    newState.currentDiceRoll = currentDiceRoll;
    // check if they went around the board
    let newPosition =
      newState.players[this.state.turn].position + currentDiceRoll;
    if (newPosition > 39) newPosition -= 40;
    newState.players[this.state.turn].position = newPosition;

    this.setState(newState, this.checkAction);
  }

  checkAction() {
    const position = this.state.players[this.state.turn].position;
    const square = boardData[position];
    const type = square.type;

    // console.log(
    //   "position",
    //   position,
    //   "currentDiceRoll",
    //   this.state.currentDiceRoll
    // );

    switch (type) {
      case "go":
        this.handleGo();
        break;
      case "property":
        this.handleProperty();
        break;
      case "community-chest":
        alert("community-chest");
        break;
      case "tax":
        alert("tax");
        break;
      case "railroad":
        alert("railroad");
        break;
      case "chance":
        alert("chance");
        break;
      case "jail":
        alert("jail");
        break;
      case "utility":
        alert("utility");
        break;
      case "free-parking":
        alert("tax");
        break;
      case "go-to-jail":
        alert("tax");
        break;
      default:
        alert("something went wrong");
    }
    // check if they passed go (doesn't trigger if they land on go)
    if (position - this.state.currentDiceRoll < 0) this.handleGo();

    this.updateTurn();
  }

  handleGo() {
    alert("You passed go! Collect $200!");
    const newState = Object.assign(this.state);
    newState.players[this.state.turn].money += 200;
    this.setState(newState);
  }

  handleProperty() {
    const property = boardData[this.state.players[this.state.turn].position];
    prompt(
      `You landed on ${property.name}!/nDo you want to buy it for $${property.cost}?`
    );
  }

  updateTurn() {
    const newState = Object.assign(this.state);
    newState.turn =
      newState.turn < this.state.players.length - 1 ? newState.turn + 1 : 0;

    this.setState(newState);
  }

  componentWillMount() {
    function Player(name) {
      this.name = name;
      this.money = 1500;
      this.properties = [];
      this.position = 0;
    }
    /* Uncomment to prompt user for player names */
    // const playerNames = prompt(
    //   "Enter player names\nSeparate Names with ,",
    //   "Names"
    // ).split(",");
    const playerNames = ["Suzy", "Billy", "Johnny"];
    const players = playerNames.map(playerName => new Player(playerName));
    this.setState({ players: players });
  }

  render() {
    return (
      <div className="App">
        <Board />
        <UserPortal
          rollDice={this.rollDice}
          players={this.state.players}
          turn={this.state.turn}
          currentDiceRoll={this.state.currentDiceRoll}
        />
      </div>
    );
  }
}

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <Row rowNum="1" squareData={boardData.slice(0, 10)} />
        <Row rowNum="2" squareData={boardData.slice(10, 20)} />
        <Row rowNum="3" squareData={boardData.slice(20, 30)} />
        <Row rowNum="4" squareData={boardData.slice(30, 40)} />
        <div className="temp" id="temp-1">temp 1</div>
        <div className="temp" id="temp-2">temp 2</div>
        <div className="temp" id="temp-3">temp 3</div>
        <div className="temp" id="temp-4">temp 4</div>
      </div>
    );
  }
}

class Row extends Component {
  render() {
    const squares = this.props.squareData.reverse().map((square, i) => {
      return (
        <Square key={i} name={square.name} color={square.color || "white"} />
      );
    });
    return (
      <div className={`Row Row-${this.props.rowNum}`}>
        {squares}
      </div>
    );
  }
}

class Square extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }} className="Square">
        {this.props.name}
      </div>
    );
  }
}

class UserPortal extends Component {
  render() {
    const playerData = this.props.players.map((playerObj, i) => {
      return (
        <tr key={i}>
          <td>
            {playerObj.name}
          </td>
          <td>
            {playerObj.position}
          </td>
          <td>
            {playerObj.money}
          </td>
        </tr>
      );
    });
    return (
      <div className="User-Portal">
        <table>
          <tbody>
            <tr>
              <th>Player Name</th>
              <th>Board Position</th>
              <th>Money</th>
            </tr>
            {playerData}
          </tbody>
        </table>
        <p>
          It's {this.props.players[this.props.turn].name}'s turn
        </p>
        <div>
          <button onClick={this.props.rollDice}>Roll Dice!</button>
          <p>
            Last Roll --> {this.props.currentDiceRoll}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
