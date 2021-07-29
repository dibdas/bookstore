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
  {
    id: Math.random(),
    title: 'The Hunger Games',
    category: 'Action',
  },
];

const bookreducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { id: Math.random, title: action.title, category: action.category }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default bookreducer;
