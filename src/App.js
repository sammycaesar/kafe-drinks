import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import { HeroSection } from "./components/hero/hero";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cocktails: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { cocktails, searchField } = this.state;
    const filteredCocktails = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className='App'>
        <HeroSection />
        <SearchBox
          placeholder='search a cocktail'
          handleChange={this.handleChange}
        />
        <CardList cocktails={filteredCocktails} />
      </div>
    );
  }
}

export default App;
