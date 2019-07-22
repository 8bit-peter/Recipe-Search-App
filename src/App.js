import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar';
import RecipesList from "./components/RecipesList";
import TagList from "./components/TagList";

class App extends Component {

  state = {
    recipes: [],
    loading: false,
    
    searchList: [],
    searchPagination: 1
  }

  loadData = () => {
    this.setState({ loading: true })

    axios
    .get("https://cors-anywhere.herokuapp.com/recipepuppy.com/api/", {
      params: {
        i: this.state.searchList.join(","),
        p: this.state.searchPagination
      }
    })

    .then(response => this.setState({ recipes: response.data.results, loading: false }))
  }

  onSearchSubmit = props => {
    this.setState(
      { searchList: this.state.searchList.concat(props), searchPagination: 1 },
      () => {
        this.loadData();
      }
    );
  };

  onTagDelete = props => {
    this.setState(
      {
        searchList: this.state.searchList.filter(value => value !== props),
        searchPagination: 1
      },
      () => {
        this.state.searchList.length === 0
          ? this.setState({ recipes: [] })
          : this.loadData();
      }
    );
  };

  onPageChange = props => {
    this.setState(
      {
        searchPagination:
          this.state.searchPagination + props > 1
            ? this.state.searchPagination + props
            : 1
      },
      () => {
        this.state.searchPagination > 0 && this.loadData();
      }
    );
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <TagList
          searchList={this.state.searchList}
          onTagDelete={this.onTagDelete}
        />
        <RecipesList 
          loading={this.state.loading} 
          recipes={this.state.recipes}
          searchPagination={this.state.searchPagination}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
  
}

export default App;
