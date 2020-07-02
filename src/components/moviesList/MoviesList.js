import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import routes from "../../routes"
import styles from "./moviesList.module.css"

const MoviesList = ({ moviesList, location }) => {
  return (
    <ul className={styles.moviesList}>
      {moviesList.map(movie => (
        <li className={styles.moviesListItem} key={movie.id}>
          <NavLink   className={styles.navLink}
                      to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location.pathname, fromSearch: location.search },
           
            }}
          ><div className={styles.movieContainer} >
            <img className={styles.moviesImg}
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.original_title}
            width={100}></img>
            <h2>{movie.title}</h2>
          </div>
          
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
