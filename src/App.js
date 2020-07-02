import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import Layout from "./components/layout/Layout"
// import HomePage from "./pages/HomePage/HomePage"
// import MoviesPage from './pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'

const AsyncHomePage = lazy(() => 
import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
)

const AsyncMoviesPage = lazy(() => 
import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */)
)

const AsyncMoviesDetailsPage = lazy(() => 
import ('./pages/MovieDetailsPage/MovieDetailsPage'/* webpackChunkName: "MovieDetailsPage" */)
)



const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={routes.home} exact component={AsyncHomePage} />
            <Route path={routes.movieDetails} component={AsyncMoviesDetailsPage}/>
            <Route path={routes.movies} component={AsyncMoviesPage} />
            <Redirect to={routes.home}/>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
