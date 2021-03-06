const weather = require('./weather');
const firebaseApi = require('./firebaseApi');
const { checkLoginStatus, } = require('./auth');

// const apiKeys = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax('../db/apiKeys.json')
//       .done((data) => {
//         resolve(data.apiKeys);
//       })
//       .fail((err) => {
//         reject(err);
//       });
//   });
// };

// const retrieveKeys = () => {
//   apiKeys()
//     .then((results) => {
//       weather.setKey(results.weather.apiKey);
//     })
//     .catch((err) => {
//       console.error('no keys:', err);
//     });
// };

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      weather.setKey(results.weather.apiKey);
      firebaseApi.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
      checkLoginStatus();
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
