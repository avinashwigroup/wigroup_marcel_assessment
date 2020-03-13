import { UPDATE_INFO } from '../constants/types.js';

export const updateInfo = payload => {  
  return {
    type: UPDATE_INFO,
    payload
  }
}
