import { UPDATE_INFO } from '../constants/types';

// Initialise state
export const initialState = {
  username: "",
  password: "",
  authenticated: false
}

const rootReducer = (state = initialState, action) => {
  console.log(action)
  if(action.type === UPDATE_INFO) {
    console.log(action)
    return Object.assign({}, state, {
      username: action.payload[0].username,
      password: action.payload[0].password,
      authenticated: true
    })
  }
  return state;
}
export default rootReducer;
