import postsReducer from './postsReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    postsReducer,
    // This will work too  
    // root_reducer:postsReducer  
})

export default allReducers