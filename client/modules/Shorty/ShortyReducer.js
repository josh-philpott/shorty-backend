import { ADD_SHORTYS, FETCH_SHORTY_LIST, FETCH_SHORTY_SUCCESS, FETCH_SHORTY_FAILURE } from './ShortyActions';

// Initial State
const initialState = {
  list: [],
  isLoading: false,
  isError: false
};

const ShortyReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_SHORTYS :
    //   return {
    //     list: action.payload,
    //   };

    case FETCH_SHORTY_LIST: {
      return {
        ...state,
        list: action.payload,
        isLoading: true
      }
    }

    case FETCH_SHORTY_SUCCESS: {
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    }

    case FETCH_SHORTY_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    }

    default:
      return state;
  }
};

/* Selectors */
// Get all shortys
export const getShortys = state => state.shortys;

// Export Reducer
export default ShortyReducer;
