// import { combineReducers } from 'redux';
// import summary from './summayReducer';

// const rootReducer = combineReducers({
//   summary,
// });

// export default rootReducer;

// const initState = {
//     posts: [
//         { "id" : 1, "name": "shaik"},
//         { "id" : 2, "name": "ali"}
//     ]
// }

// const rootReducer = (state = initState, action) => {
//     return state;
// }

// export default rootReducer;

import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
export default combineReducers({
 simpleReducer
});