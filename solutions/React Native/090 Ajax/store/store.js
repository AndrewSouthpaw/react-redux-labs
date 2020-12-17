import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers.js'
import middlewares from './middleware.js'

export const store = createStore(
  reducer,
  applyMiddleware(...middlewares),
)
