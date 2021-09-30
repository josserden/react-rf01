import MovieCard from '../MovieCard/MovieCard';
import { List } from './MovieList.styled';

const MovieList = ({ filteredMovies }) => {
  return (
    <List>
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </List>
  );
};

export default MovieList;
