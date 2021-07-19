import { CREATEBOOK, REMOVEBOOK } from '../actions/index';

const bookreducer = (state = [{ id: 1, title: 'test', category: 'cat' }], action) => {
  switch (action.type) {
    case CREATEBOOK:
      return [...state, { id: Math.random, title: action.title, category: action.category }];
    case REMOVEBOOK:
      return [...state];

    default:
      return state;
  }
};

export default bookreducer;
