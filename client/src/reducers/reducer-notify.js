import { NOTIFY } from '../actions/types';

const initialState = {
  mode: 0,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NOTIFY:
      return { mode: action.payload.mode, data: action.payload.message };
    default:
      return state;
  }
}
