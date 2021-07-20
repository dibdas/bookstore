const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

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
const changefilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, changefilter, createbook, removebook,
};
