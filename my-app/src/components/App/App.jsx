import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import { moviesContext } from '../../moviesContext';
import { Body, Section, Container, Title } from './App.styled';

import MovieList from '../MovieList/MovieList';

const initialState = {
  movieTitle: '',
  submittedMovieTitle: '',
  movies: [],
  isLoading: false,
  isError: false,
  selectedMovie: null,
};

const ACTIONS = {
  TYPE_SEARCH: 'TYPE_SEARCH',
  SUBMIT_SEARCH: 'SUBMIT_SEARCH',
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAIL: 'FETCH_DATA_FAIL',
  SELECT_MOVIE: 'SELECT_MOVIE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TYPE_SEARCH:
      return {
        ...state,
        movieTitle: action.value,
      };

    case ACTIONS.SUBMIT_SEARCH:
      return {
        ...state,
        submittedMovieTitle: state.movieTitle,
      };

    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.FETCH_DATA_SUCCESS:
      return {
        ...state,
        movies: action.value,
        isLoading: false,
      };

    case ACTIONS.FETCH_DATA_FAIL:
      return {
        ...state,
        isError: true,
      };

    case ACTIONS.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.value,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event) => {
    dispatch({
      type: ACTIONS.TYPE_SEARCH,
      value: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ACTIONS.SUBMIT_SEARCH,
    });
  };

  const API_KEY = '16c66b0f7fd3c3447e7067ff07db3197';

  useEffect(() => {
    if (state.submittedMovieTitle) {
      const fetchData = async () => {
        dispatch({
          type: ACTIONS.FETCH_DATA,
        });

        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${state.submittedMovieTitle}`
          );
          dispatch({
            type: ACTIONS.FETCH_DATA_SUCCESS,
            value: response.data.results,
          });
        } catch (error) {
          dispatch({
            type: ACTIONS.FETCH_DATA_FAIL,
          });
        }
      };
      fetchData();
    }
  }, [state.submittedMovieTitle]);

  const selectMovie = (movie) => {
    dispatch({
      type: ACTIONS.SELECT_MOVIE,
      value: movie,
    });
  };

  const filteredMovies = !state.selectedMovie
    ? state.movies
    : [state.selectedMovie];

  return (
    <moviesContext.Provider value={selectMovie}>
      <Body>
        <Section>
          <Container>
            <Title>Movie Finder</Title>

            <form onSubmit={onSubmit}>
              <input type="text" placeholder="Search" onChange={onChange} />
            </form>

            {state.isLoading ? (
              <ClipLoader color="#4286f4" size={150} />
            ) : state.isError ? (
              <p> Data failed to load </p>
            ) : (
              <MovieList filteredMovies={filteredMovies} />
            )}
          </Container>
        </Section>
      </Body>
    </moviesContext.Provider>
  );
}

export default App;
