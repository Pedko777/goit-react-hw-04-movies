import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import MoviesList from '../../components/moviesList/MoviesList';
import getQueryParams from '../../ui/getQueryParams';
import services from '../../services/services';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    filmList: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      return this.fetchWithQuery(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search,
    );
    const { query: nextQuery } = getQueryParams(this.props.location.search,
    );

    if (prevQuery !== nextQuery) {
       this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = (query) => {
    if (query) {
      services
        .fetchMoviesWithQuery(query)
        .then(data=> this.setState({filmList: data})
        )
        .catch(error => console.log(error));
    }
  };

  handleSearch = (searchQuery) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { location } = this.props;
    const { filmList } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearch} />
        <MoviesList moviesList={filmList} location={location} />
      </>
    );
  }
}

export default MoviesPage;
