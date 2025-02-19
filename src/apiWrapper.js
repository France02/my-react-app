// src/apiWrapper.js

// Accesso alle funzioni API globali
export const fetchAPI = (...args) => {
    if (typeof window.fetchAPI === 'function') {
      return window.fetchAPI(...args);
    } else {
      console.error('fetchAPI is not available on the window object');
      throw new Error('fetchAPI is not defined');
    }
  };
  
  export const submitAPI = (...args) => {
    if (typeof window.submitAPI === 'function') {
      return window.submitAPI(...args);
    } else {
      console.error('submitAPI is not available on the window object');
      throw new Error('submitAPI is not defined');
    }
  };