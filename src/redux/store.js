// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../redux/reducer/rootReducer';

// /**
//  * create a single redux store. thunk is middleware that
//  * enables async action creators. this is necessary for
//  * fetching data from the server without blocking the ui.
//  * the composeEnhancers method adds support for react dev
//  * tools, which also has a chrome extension for debugging.
//  * The dev tools are only active when
//  * process.env.NODE_ENV = 'development'
//  */
// /* eslint-disable  no-underscore-dangle */
// /* eslint-disable  no-undef */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}