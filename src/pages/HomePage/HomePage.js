import React, { Component } from 'react';
import services from '../../services/services';
import styles from './homePage.module.css';
import MoviesList from '../../components/moviesList/MoviesList';



class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    services
      .fetchTrendingMovies()
      .then(data => this.setState({ trendingMovies: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { location } = this.props;
    const { trendingMovies } = this.state;
    return (
      <>
        <h2 className={styles.trendingTitle}>Trending today</h2>;
        {trendingMovies.length > 0 && (
          <MoviesList moviesList={trendingMovies} location={location} />
        )}
      </>
    );
  }
}

export default HomePage;
