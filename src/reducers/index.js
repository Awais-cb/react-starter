import postsReducer from './postsReducer'
import loginReducer from './loginReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    postsReducer,
    loginReducer
    // This will work too  
    // root_reducer:postsReducer  
})

export default allReducers