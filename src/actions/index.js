const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createbook = (title,
  category) => ({
  type: CREATE_BOOK,
  title,
  category,
});

const removebook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export {
  CREATE_BOOK, REMOVE_BOOK, createbook, removebook,
};
