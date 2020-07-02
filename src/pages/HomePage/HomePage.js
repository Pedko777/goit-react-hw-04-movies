import React, { Component } from 'react';
import services from '../../services/services';
import styles from "./homePage.module.css"
import MoviesList from '../../components/moviesList/MoviesList';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    services
    .fetchTrendingMovies()
    .then(res=> this.setState({trendingMovies: res}))
    .catch(error => console.log(error));
  }


  render() {
    const { trendingMovies } = this.state;
    return (
      <>
        <h2 className={styles.trendingTitle}>Trending today</h2>;
        {trendingMovies && (
          <MoviesList moviesList={this.state.trendingMovies} />
        )}
      </>
    );
  }
}

export default HomePage;
