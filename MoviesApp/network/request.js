import {Request} from './network';

export const getMovies = async page => {
  return Request.request({
    url:
      'https://api.themoviedb.org/3/movie/' +
      page.api +
      '?api_key=d559c2b67aa16d708f6c16c7cbd6bcde&page=' +
      page.page,
    method: 'GET',
  });
};

export const getTv = async page => {
  console.log('apicall', page);
  return Request.request({
    url:
      'https://api.themoviedb.org/3/tv/' +
      page.api +
      '?api_key=d559c2b67aa16d708f6c16c7cbd6bcde&page=' +
      page.page,
    method: 'GET',
  });
};

export const search = async data => {
  return Request.request({
    url:
      'https://api.themoviedb.org/3/search/' +
      data.api +
      '?api_key=d559c2b67aa16d708f6c16c7cbd6bcde&page=' +
      data.page +
      '&query=' +
      data.query,
    method: 'GET',
  });
};