import store from '../store';
import * as C from '../constants/summaryConstants';

const getStateKey = val => {    
    return store.getState().data[val];
  };


  export const getProducts = (params) => {
    const _url = `http://localhost:3002/products`;
    //const _stateKey = getStateKey('products');
  console.log("we are in actions");

    // return (dispatch) => {
    //   request.get(`${_url}`)
    //   .then(({ body }) => dispatch({
    //     type: C.GET_PRODUCTS,
    //     payload: body
    //   }))
    //   .catch(err => {
    //     dispatch({
    //       type: C.GET_ERROR,
    //       payload: err
    //     });
    //   });
    // };
  }