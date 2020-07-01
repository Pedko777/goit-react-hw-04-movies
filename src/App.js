import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'


const App = () => {
  return (
    <>
      <Layout>
        <Suspense>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage}/>
            <Route path={routes.movies} component={MoviesPage} />
            <Redirect to={routes.home}/>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;

// 70751a0c86ff1271ff2aa30c5249463a

// https://api.themoviedb.org/3/movie/550?api_key=70751a0c86ff1271ff2aa30c5249463a
