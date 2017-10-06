import React from "react";
import ReactDOM from "react-dom";

const carBrands = [
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Kia",
  "Mazda",
  "Mercedez-Benz",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Porsche",
  "SAAB",
  "Subaru",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo"
];

/**
 * EXERCISE
 *
 * Create a Typeahead Input
 * ------------------------
 *
 * General guidelines: Use default browser styles. Focus on functionality.
 *
 * Requirements:
 *   1. As the user types in the input, a list of options should appear below
 *      it. The list should contain items from the `list` prop that *start* with
 *      the user entered value (case insensitive).
 *   2. Every new character typed should filter the list.
 *   3. List should only appear when input is not empty. Whitespace only is
 *      considered empty.
 *   4. Clicking on a list item should populate the input with the selected
 *      value and hide the list.
*/

class Typeahead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carBrands: this.props.list,
      searchText: "",
      filteredCarBrands: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.populateInput = this.populateInput.bind(this);
  }

  updateFilteredCarBrands() {
    if (!this.state.searchText.length) {
      this.setState({ filteredCarBrands: [] });
      return;
    }
    const filteredCarBrands = carBrands.filter(carBrand =>
      carBrand.toLowerCase().startsWith(this.state.searchText.toLowerCase())
    );
    this.setState({ filteredCarBrands });
  }

  populateInput(e) {
    // console.log(e.target.dataset.carbrand)
    this.setState({
      searchText: e.target.dataset.carbrand,
      filteredCarBrands: []
    });
    // console.log(document.getElementById('text-input'))
    document.getElementById("text-input").value = e.target.dataset.carbrand;
  }

  handleSearchChange(e) {
    // console.log()
    this.setState({ searchText: e.target.value }, this.updateFilteredCarBrands);
  }

  render() {
    return (
      <div>
        <Search
          list={this.props.list}
          handleSearchChange={this.handleSearchChange}
        />
        <List
          searchText={this.state.searchText}
          populateInput={this.populateInput}
          filteredCarBrands={this.state.filteredCarBrands}
        />
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          id="text-input"
          type="text"
          onChange={this.props.handleSearchChange}
        />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const listItems = this.props.filteredCarBrands.map((carBrand, i) => {
      const bolded = this.props.searchText;
      const unBolded = carBrand.slice(bolded.length);
      console.log(bolded);
      console.log(unBolded);
      return (
        <li key={i}>
          <div data-carBrand={carBrand} onClick={this.props.populateInput}>
            <b>
              {bolded}
            </b>
            {unBolded}
          </div>
        </li>
      );
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

ReactDOM.render(
  <Typeahead list={carBrands} />,
  document.getElementById("root")
);
