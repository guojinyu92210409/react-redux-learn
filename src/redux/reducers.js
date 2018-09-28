import { combineReducers } from 'redux'
import homeRedux from '../views/home/redux'

//  所有reducers集合
const rootReducers = combineReducers({
  homeRedux
})

export default rootReducers