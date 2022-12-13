import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream
import './movie-card.scss';
=======
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";
>>>>>>> Stashed changes

import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
<<<<<<< Updated upstream
    const { movie, onMovieClick } = this.props;

    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
=======
    const { movie } = this.props;

    return (
      <Card className='mb-4'>
        <Card.Img height="374px" variant="top" src={movie.ImagePath} crossOrigin="anonymous" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text className='text-truncate mb-2'>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button className='mb-1' variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
>>>>>>> Stashed changes
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
<<<<<<< Updated upstream
  onMovieClick: PropTypes.func.isRequired
};
=======
  onMovieClick: PropTypes.func
};
>>>>>>> Stashed changes
