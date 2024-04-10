import { dataReducer } from './dataReducer'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
    data: dataReducer,
})