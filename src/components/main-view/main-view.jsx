import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {


  constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: "Pan's labyrinth", Genre:"Fantasy", Description: "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.", ImagePath: 'https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg'},
        { _id: 2, Title: 'Shutter Island', Genre:"Triller", Description: 'Shutter Island is a 2010 American neo-noir psychological thriller film[4] directed by Martin Scorsese and adapted by Laeta Kalogridis, based on the 2003 novel of the same name by Dennis Lehane. Leonardo DiCaprio stars as Deputy U.S. Marshal Edward "Teddy" Daniels, who is investigating a psychiatric facility on Shutter Island after one of the patients goes missing.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg'},
        { _id: 3, Title: 'Gladiator', Genre:'Action', Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png'}
      ],
      selectedMovie:null
    };
  }
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
  render() {
    const { movies, selectedMovie } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;