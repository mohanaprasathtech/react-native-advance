import {ADDITION, SUBTRACTION, NULLS} from './actiontype';

const initialstate = {
  counter: 0,
};

export const mainreducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};

    case SUBTRACTION:
      return {...state, counter: state.counter - 1};

    case NULLS:
      return {counter: 0};

    default:
      return state;
  }
};
