import { Action } from 'redux'
// import { RootState } from '.'

interface ErrorState {
  error: string
}

const initialState: ErrorState = {
  error: '',
}

const DISPLAY_ERROR = 'errors/display_error'

type FetchErrorAction = Action<typeof DISPLAY_ERROR>
type ErrorActions = FetchErrorAction

const errors = (state: ErrorState = initialState, action: ErrorActions) => {
  switch (action.type) {
    default:
      return state
  }
}

export default errors
