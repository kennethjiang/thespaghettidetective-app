import {Store, createStore, compose, applyMiddleware} from 'redux'

import rootReducer, {State} from './rootReducer'

export const store: Store<State> = createStore(rootReducer)

export type AppDispatch = typeof store.dispatch

export default store