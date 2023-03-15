const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33094767-bc88b030fc5c18ef153037b77';

export const getImg = (text, page, perPage) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${text}&page=${page}&per_page=${perPage}`
  );
};
