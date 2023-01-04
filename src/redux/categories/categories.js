export const initialState = [];

const CHECK_STATUS = 'bookstore-react/categories/check-states';

export const checkStates = () => (dispatch) => {
  dispatch({ type: CHECK_STATUS, payload: 'Under construction' });
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return [action.payload];
    }
    default:
      return state;
  }
};

export default categoriesReducer;
