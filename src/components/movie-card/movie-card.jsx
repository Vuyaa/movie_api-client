import React from 'react';
import PropTypes from 'prop-types';
import { Ratio } from 'react-bootstrap'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./movie-card.scss";


export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

     return (

      <Card className='mb-4'>
        <Card.Img height="374px" variant="top" src={movie.ImagePath} crossOrigin="anonymous" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text className='text-truncate mb-2'>{movie.Description}</Card.Text>
          <Button className='mb-1' onClick={() => onMovieClick(movie)} variant="link">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }),
  }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};