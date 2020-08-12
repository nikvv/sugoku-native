import { combineReducers } from "redux";
import boardReducer from './board-reducer'
import resultReducer from './result-reducer'

const rootReducer = combineReducers({
      boardReducer,
      resultReducer
})

export default rootReducer