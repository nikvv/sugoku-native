import { combineReducers } from "redux";
import boardReducer from './board-reducer'

const rootReducer = combineReducers({
      boardReducer,
})

export default rootReducer