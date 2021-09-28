import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const initialState = {
  movieTitle: '',
  submittedMovieTitle: '',
  movies: [],
  isLoading: false,
  isError: false,
};

const ACTIONS = {
  TYPE_SEARCH: 'TYPE_SEARCH',
  SUBMIT_SEARCH: 'SUBMIT_SEARCH',
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAIL: 'FETCH_DATA_FAIL',
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

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <h2>MovieFinder</h2>

        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Search" onChange={onChange} />
        </form>
        {state.isLoading ? (
          <CircularProgress color="secondary" />
        ) : state.isError ? (
          <p> Data failed to load </p>
        ) : (
          {
            /* тут место для компонента галереи фильмов */
          }
        )}
      </Container>
    </>
  );
}

export default App;
