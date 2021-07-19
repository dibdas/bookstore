import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookreducer = (state = [{ id: 1, title: 'test', category: 'cat' }], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { id: Math.random, title: action.title, category: action.category }];
    case REMOVE_BOOK:
      return [...state];

    default:
      return state;
  }
};

export default bookreducer;
