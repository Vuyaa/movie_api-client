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
          <LoginView
            onLoggedIn={(user) => this.onLoggedIn(user)}
            toRegister={(registered) => this.toRegister(registered)}
          />
        );
  
    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? (
            <Row className="justify-content-md-center">
              <Col md={8}>
                <MovieView key={selectedMovie} movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            </Row>
          )
          : (
            <Row className="justify-content-md-center">
              {movies.map(movie => (
            <Col md={4}>
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          </Col>
              ))}
            </Row>
          )
        }
      </div>
    );
}
}
