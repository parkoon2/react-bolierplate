import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const isDev = process.env.NODE_ENV === 'development'
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devTools || compose

const middlewares = [thunk]

export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))