import {combineReducers} from 'redux'
import {streamReducer} from './streams'
import {StreamStateType} from './streams/reducer'

const rootReducer = combineReducers<State>({
  stream: streamReducer,
})

export interface State {
  stream: StreamStateType
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer