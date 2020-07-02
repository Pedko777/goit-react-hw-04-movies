import React from 'react';
import styles from './movieDetails.module.css';

const { movieContainer, movieImg } = styles;
const noImgUrl = 'http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';

const MovieDetails = ({ movie }) => {
  return (
    <div className={movieContainer}>
      <div className={movieImg}>
        <img
          src={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : `${noImgUrl}`}

          alt={movie.original_title}
          width={380}
        />
      </div>
      <div>
        <h2> 
          {movie.original_title} 
        </h2>
        <h3> year: {movie.release_date.slice(0, 4)}</h3>
        <h3>counry: {movie.production_countries.reduce((acc, country) => (acc += `${country.name}, `), '')}</h3>
        <p>user votes reating: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>
          {movie.genres.reduce((acc, genre) => (acc += `${genre.name} `), '')}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
