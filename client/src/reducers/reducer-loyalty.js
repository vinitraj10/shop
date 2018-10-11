import {
  ENROLL
} from '../actions/types';

const initialState = {
  enrolled: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENROLL:
      return { enrolled: true };
    default:
      return state;
  }
}
