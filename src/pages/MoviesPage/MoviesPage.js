import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import MoviesList from '../../components/moviesList/MoviesList';
import getSearchQueryParams from '../../ui/searchQueryParams';
import services from '../../services/services';

class MoviesPage extends Component {
  state = {
    filmList: [],
  };

  componentDidMount() {
    const { searchQuery } = getSearchQueryParams(this.props.location.search);
    if (searchQuery) {
      return this.fetchWithQuery(searchQuery);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery: prevQuery } = getSearchQueryParams(
      prevProps.location.search,
    );
    const { searchQuery: nextQuery } = getSearchQueryParams(
      this.props.location.search,
    );

    if (prevQuery !== nextQuery) {
      this.setState({ filmList: [] });
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = searchQuery => {
    if (searchQuery) {
      services
        .fetchMoviesWithQuery(searchQuery)
        .then(filmList =>
          this.setState(prev => ({
            filmList: [...prev.filmList, ...filmList],
          })),
        )
        .catch(error => this.setState({ error }));
    }
  };

  handleSearch = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `searchQuery=${searchQuery}`,
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
