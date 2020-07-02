import React, { Component } from 'react';
import services from '../../services/services';
import styles from "./cast.module.css"

const noImgUrl = 'http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';

export default class Cast extends Component {
  state = { cast: null };

  componentDidMount() {
    services
      .fetchMovieCast(this.props.match.params.movieId)
      .then(cast => this.setState({ cast }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast && (
          <ul className={styles.castList}>
            {cast.map(actor => (
              <li className={styles.castListItem} key={actor.id}>
                <>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w154/${actor.profile_path}`
                        : `${noImgUrl}`
                    }
                    alt={actor.id}
                    width={150}
                  />
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}