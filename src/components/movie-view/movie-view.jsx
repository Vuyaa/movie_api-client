import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    
      return (
        <Row className="justify-content-sm-center" >            
          <Col >
            <div className="movie-view">
              <div className="movie-poster">
                <img src={movie.ImagePath} crossOrigin="Anonymous" />
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
              <Button onClick={() => { onBackClick(null); }}>Back</Button>
            </div>
          </Col>
        </Row>
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
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
