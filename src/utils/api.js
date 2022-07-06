import react from 'react';
// import axios from 'axios';

export const apiBaseURL = 'http://192.168.0.42:8001/';
// export const apiBaseURL = 'http://cc94-27-34-10-124.ngrok.io/';

const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

export const GET = (url, token) => {
  return fetch(apiBaseURL + url, {
    method: 'GET',
    headers: getHeaders(),
  });
};

export const POST = (url, data) => {
  return fetch(apiBaseURL + url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
};

export const PATCH = (url, data) => {
  return fetch(apiBaseURL + url, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
};

export const DELETE = (url, data) => {
  return fetch(apiBaseURL + url, {
    method: 'DELETE',
    headers: getHeaders(),
    body: JSON.stringify({ data }),
  });
};
