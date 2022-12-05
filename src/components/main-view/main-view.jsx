import React from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { Col }from 'react-bootstrap';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from "../movie-view/movie-view";


import "./main-view.scss"


export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registered: true,
    }
  }
  
  componentDidMount(){
    axios.get('https://site--popkorny--w5mfxztkv9bc.code.run/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
  
  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  
  onLoggedIn(user) {
    this.setState({
      user
    });
  }
  
  toRegister(registered) {
    this.setState({
      registered,
    });
  }
  
  render() {
    const { movies, selectedMovie, user, registered } = this.state;
  
    if (!registered) return <RegistrationView />;
  
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user)
        return (
          <Row className="justify-content-center">
            <Col xs={12} lg={8}> 
              <LoginView
                onLoggedIn={(user) => this.onLoggedIn(user)}
                toRegister={(registered) => this.toRegister(registered)}  
              />
            </Col>
         </Row> 
        );
  
    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;
  
    return (
      <Row className="main-view justify-content-center">
        {selectedMovie ? (
          <Col>
            <MovieView
              movie={selectedMovie}
              onBackClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ) : (
          movies.map((movie) => (
            <Col xs={10} sm={6} md={4} lg={3} className="main-grid-item mb-3">
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))
        )}
      </Row>
    );
  }
}
