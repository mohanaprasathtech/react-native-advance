import {ADDITION, SUBTRACT} from './actiontype';

const initialstate = {
  counter: 0,
};

export const mainreducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state + 1};

    case SUBTRACT:
      return {...state, counter: state - 1};

    default:
      return state;
  }
};
