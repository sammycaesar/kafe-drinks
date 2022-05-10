import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import { HeroSection } from "./components/hero/hero";

class App extends Component {
  constructor() {
    super();

    this.state = {
      drinks: [],
      name: "",
      difficulty: "",
      description: "",
      instructions: "",
      tags: [],
      source: "",
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://kafe-drinks.herokuapp.com/drinks")
      .then((response) => response.json())
      .then((users) => this.setState({ drinks: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { drinks, searchField } = this.state;
    const filteredDrinks = drinks.filter((drink) =>
      drink.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
      <div className='App'>
        <HeroSection />
        <SearchBox
          placeholder='search a cocktail'
          handleChange={this.handleChange}
        />

        <CardList drinks={filteredDrinks} />
      </div>
    );
  }
}

export default App;
