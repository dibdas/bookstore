/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const CREATEBOOK = 'CREATE_BOOK';
const REMOVEBOOK = 'REMOVE_BOOK';

const createbook = (book) => {
  CREATEBOOK,
  book;
};

const removebook = (id) => {
  REMOVEBOOK,
  id;
};

export {
  CREATEBOOK, REMOVEBOOK, createbook, removebook,
};
