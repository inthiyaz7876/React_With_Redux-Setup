import {  GET_PRODUCTS, GET_ERROR } from '../constants/summaryConstants';

const initialState = {
  products: {},
  errors: {}
};

const summaryReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  if (error) return state;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload //Object.assign({}, { data: payload.data, loading: false, responseStatus: payload.status })
      };
       case GET_ERROR:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};

export default summaryReducer;