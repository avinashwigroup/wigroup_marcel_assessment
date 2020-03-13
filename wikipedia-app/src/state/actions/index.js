import {STORE_WIKI_META} from '../constants/types.js';

export const storeWikiMeta = payload => {
  return {
    type: STORE_WIKI_META,
    payload
  }
}
