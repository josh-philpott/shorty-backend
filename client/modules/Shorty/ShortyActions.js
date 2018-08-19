import callApi from '../../util/api2Caller';

// Export Constants
export const ADD_SHORTYS = 'ADD_SHORTYS';

export const FETCH_SHORTY_REQUEST = 'FETCH_SHORTY_REQUEST'
export const FETCH_SHORTY_SUCCESS = 'FETCH_SHORTY_SUCCESS'
export const FETCH_SHORTY_FAILURE = 'FETCH_SHORTY_FAILURE'

// export function addShortys(shortys) {

//   return {
//     type: ADD_SHORTYS,
//     shortys: shortys,
//   };
// }

//Calls the API and then dispatches an ADD_SHOTYS event to the reducers
// export function fetchShortys() {
//   dispatch({type:FETCH_SHORTY_REQUEST});

//   return (dispatch) => {
//     return callApi('shorten').then(res => {
//       dispatch(addShortys(res.shortys));
//     });
//   };
// }


export const fetchShortys = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_SHORTY_REQUEST });

  try {
    let shortysList = await callApi('shorten')
    debugger

    dispatch({ FETCH_SHORTY_SUCCESS, payload: shortysList })
  } catch (error) {
    dispatch({ FETCH_SHORTY_FAILURE, payload: error })
  }
}