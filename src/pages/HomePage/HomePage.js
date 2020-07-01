import React, { Component } from 'react';
import services from '../../services/services';
import MoviesList from '../../components/moviesList/MoviesList';

class HomePage extends Component {
  state = {
    trendingMovies: [],
    page: 1,
  };

  componentDidMount() {
     this.fetchTrebdingMovies()
  }

  fetchTrebdingMovies = () => {
    services
      .fetchTrendingMovies(this.state.page)
      .then(trendingMovies =>
        this.setState(prev => ({
          trendingMovies: [...prev.trendingMovies, ...trendingMovies],
          page: prev.page + 1,
        })),
      )
      .catch((error) => console.log(error));
  };

  render() {
    const {trendingMovies} = this.state
    return (
        <>
        <h2 className="trending-title">Trending today</h2>;
        {trendingMovies && (
            <MoviesList moviesList={this.state.trendingMovies}/>
        )}
        </>
    )
  }
}

export default HomePage;
