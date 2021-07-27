import { CHANGE_FILTER } from '../actions';

const filterreducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return [...state];
    default:
      return state;
  }
};
export default filterreducer;
