
const initialState = {
    products: {"id": 1, "name": "shaik"},
    errors: {},
    result: []
  };

export default (state = initialState, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
          ...state,
       result: action.payload
      }
     default:
      return state
    }
   }