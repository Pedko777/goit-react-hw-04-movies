import React, { Component } from 'react';
import services from '../../services/services';
import styles from './movieDetailsPage.module.css';
import routes from '../../routes';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import AdditionalInfo from '../../components/additionalInfo/AdditionalInfo';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    images: [],
  };

  componentDidMount() {
    services
      .fetchMoviesDetails(this.props.match.params.movieId)
    //   .then(movie => console.log({movie}))
      .then(movie => this.setState({ movie }))
      .catch(error => console.log(error));
  }

  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state && state.from) {
      return history.push(state.from);
    }
    history.push(routes.moviesPage);
  };

  render() {
    const { movie } = this.state;
    return (
      <div className={styles.containerMovieDetails}>
        <button onClick={this.handleGoBack}>Go back</button>
        {movie && <MovieDetails movie={movie} />}
        
      </div>
    );
  }
}

export default MovieDetailsPage;
