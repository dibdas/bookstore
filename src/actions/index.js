/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const CREATEBOOK = 'CREATE_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';

const createbook = (book) => {
  CREATEBOOK,
  book;
};

const removebook = (book) => {
  REMOVEBOOK,
  book;
};

export {
  CREATEBOOK, REMOVEBOOK, createbook, removebook,
};
