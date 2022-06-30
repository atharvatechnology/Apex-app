import react from 'react';
// import axios from 'axios';

export const apiBaseURL = 'http://192.168.0.33:8000/';

export const GET = (url, token) => {
  return fetch(apiBaseURL + url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + token,
    },
  });
};

export const POST = (url, token, data) => {
  return fetch(apiBaseURL + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  });
};

export const PATCH = (url, token, data) => {
  return fetch(apiBaseURL + url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Context-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  });
};

export const DELETE = (url, token, data) => {
  return fetch(apiBaseURL + url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Context-Type': 'application/json',
      Authorization: 'Beared ' + token,
    },
    body: JSON.stringify({ data }),
  });
};
