import React, { Component } from "react";
import Autocomplete from "react-autocomplete";

export default class SearchBar extends Component {
  
    state = {
      searchValue: "",
      errorMessage: ""
    };

  onSearchSubmit = e => {
    e.preventDefault();

    let error = "";
    error = this.state.searchValue.length === 0 ? "Please fill the field!" : "";

    this.setState(
      {
        errorMessage: error
      },
      () => {
        if (this.state.errorMessage.length === 0) {
          this.props.onSearchSubmit(this.state.searchValue);
          this.setState({ searchValue: "" });
        }
      }
    );
  };

  render() {
    return (
      <div className="container searchBar">
        <form onSubmit={this.onSearchSubmit} className="search">
          <Autocomplete
            getItemValue={item => item.label}
            items={[
              { label: "salt" },
              { label: "butter" },
              { label: "flour" },
              { label: "water" },
              { label: "eggs" },
              { label: "milk" },
              { label: "honey" },
              { label: "soy sauce" },
              { label: "paprika" },
              { label: "chili powder" },
              { label: "onions" },
              { label: "beef" },
              { label: "garlic" },
              { label: "brown sugar" },
              { label: "olive oil" },
              { label: "vegetable oil" },
              { label: "black pepper" },
              { label: "cinnamon" },
              { label: "lemon juice" },
              { label: "sour cream" }
            ]}
            renderItem={(item, isHighlighted) => (
              <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
                {item.label}
              </div>
            )}
            value={this.state.searchValue}
            onChange={e => this.setState({ searchValue: e.target.value })}
            onSelect={value => this.setState({ searchValue: value })}
          />
          <button className="search__btn" type="search__submit">Search</button>
          <div className="search__error">{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
}
