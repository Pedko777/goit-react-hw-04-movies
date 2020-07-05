import React, { lazy, Suspense, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import services from '../../services/services';
import styles from './movieDetailsPage.module.css';
import routes from '../../routes';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import AdditionalInfo from '../../components/additionalInfo/AdditionalInfo';

const AsyncCast = lazy(() =>
  import('../../components/cast/Cast' /* webpackChunkName: "Cast" */),
);

const AsyncReviews = lazy(() =>
  import(
    '../../components/reviews/Reviews' /* webpackChunkName: "Reviews" */
  ),
);

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

   history.push(routes.movies);
  };

  render() {
    const { movie } = this.state;
    const { match, location } = this.props;
    return (
      <div className={styles.containerMovieDetails}>
        <button onClick={this.handleGoBack}>Go back</button>
        {movie && (
          <>
            <MovieDetails movie={movie} />
            <AdditionalInfo match={match} location={location} />
          </>
        )}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={`${match.path}/cast`} component={AsyncCast} />
            <Route path={`${match.path}/reviews`} component={AsyncReviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MovieDetailsPage;
