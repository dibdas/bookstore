import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const defaultState = [
  {
    id: Math.random(),
    title: 'Tesla',
    category: 'Biography',
  },
  {
    id: Math.random(),
    title: 'HomoSapiens',
    category: 'History',
  },
];

const bookreducer = (state = defaultState, action) => {
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
