import { STORE_WIKI_META } from '../constants/types';

// Initialise state
export const initialState = {
  url: "",
  title: ""
}

const rootReducer = (state = initialState, action) => {
  if(action.type === STORE_WIKI_META) {
    return Object.assign({}, state, {
      url: action.payload[0].url,
      title: action.payload[0].title
    })
  }
  return state;
}
export default rootReducer;
