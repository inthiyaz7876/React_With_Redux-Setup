import axios from 'axios';

export const simpleAction = () => dispatch => {

    axios.get(`http://localhost:3002/products`)
    .then(res => {
      const persons = res.data;
      console.log("in actions", persons)
      dispatch({
        type: 'SIMPLE_ACTION',
        payload: persons
       })
    })
   }