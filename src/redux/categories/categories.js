export const initialState = [];

const CHECK_STATUS = 'check-states';
export function checkStates() {
  return { type: CHECK_STATUS };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under construction';
    }
    default:
      return state;
  }
}
