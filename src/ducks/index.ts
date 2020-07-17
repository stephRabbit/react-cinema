import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import errors from './errors'
import movies from './movies'

const rootReducer = combineReducers({
  errors,
  movies,
})

// Infer rootReducer, avoid interface with manual updates
export type RootState = ReturnType<typeof rootReducer>

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
