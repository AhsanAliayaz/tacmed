import UserReducer from '../Reducer/UserReducer'
import BoardingReducer from '../BoardingRefucer/BoardingReducer';

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
    USER:UserReducer,
    BoardingReducer: BoardingReducer,

    
})
export default rootReducer;