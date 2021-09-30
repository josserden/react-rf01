import { useContext } from 'react';

import { moviesContext } from '../../moviesContext';

import { Card } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const selectMovie = useContext(moviesContext);

  const onChange = (event) => {
    selectMovie(event.target.checked ? movie : null);
  };

  return movie.poster_path ? (
    <Card>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie poster"
      />
      <div>
        <span>⭐️</span>
        <p>{movie.vote_average}</p>
      </div>
      <div>
        <span>Vote</span>
        <p>{movie.vote_count}</p>
      </div>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={onChange}
      />
    </Card>
  ) : null;
};

export default MovieCard;
