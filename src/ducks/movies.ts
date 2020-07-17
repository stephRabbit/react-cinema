import { Action } from 'redux'
// import { RootState } from '.'

interface MovieState {
  list: string
}

const initialState: MovieState = {
  list: '',
}

const FETCH_MOVIES = 'movies/fetch_movies'

type FetchMovieAction = Action<typeof FETCH_MOVIES>
type MovieActions = FetchMovieAction

const movies = (state: MovieState = initialState, action: MovieActions) => {
  switch (action.type) {
    default:
      return state
  }
}

export default movies
