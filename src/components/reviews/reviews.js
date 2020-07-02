import React, { Component } from 'react';
import services from "../../services/services"

export default class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    services
      .fetchMovieReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </>
              </li>
            ))}
          </ul>
        ) : (
          <p>there is no reviews for this movie</p>
        )}
      </>
    );
  }
}