import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
<<<<<<< Updated upstream
=======
import { Row, Col, Button, Image } from "react-bootstrap";


>>>>>>> Stashed changes
import './movie-view.scss';

import { Link } from "react-router-dom";

export class MovieView extends React.Component {
  render() {
<<<<<<< Updated upstream
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} crossOrigin="Anonymous" height="400px" width="300px" />
        </div>
        <div className="movie-title">
          <span className="label">Title:</span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description:</span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre:</span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
=======
    const { movie, onBackClick, handleFavorite } = this.props;

    return (
      <Row  >            
      <Col className="justify-content-md-center">
        <div className="movie-view">
          <div className="movie-poster">
            <img height="800px" width="400px" className='img-fluid shadow-10' src={movie.ImagePath} crossOrigin="Anonymous" />
          </div>
          <div className="movie-title">
            <span className="label">Title:</span>
            <span className="value">{movie.Title}</span>
          </div>
          <div className="movie-description">
            <span className="label">Description:</span>
            <span className="value">{movie.Description}</span>
          </div>
          <div className="movie-genre">
            <span className="label">Genre:</span>
            <span className="value">{movie.Genre.Name}</span>
          </div>
          
          <Button
            className="favorite-button mt-2"
            variant="primary"
            onClick={() => handleFavorite(movie._id, "add")}
          >
            Add to favorite Movies
          </Button>
            <Button
              className="back-button mt-2"
              variant="secondary"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
           </div> 
        </Col>
      </Row>
>>>>>>> Stashed changes
    );
  }
}
MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
<<<<<<< Updated upstream
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
=======
      Bio: PropTypes.string,
      Birth: PropTypes.string,
      Death: PropTypes.string
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func
};
>>>>>>> Stashed changes
