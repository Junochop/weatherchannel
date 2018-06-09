/* eslint camelcase: 0 */

const dom = require('./dom');

let weatherKey = '';

const setKey = (key) => {
  weatherKey = key;
};

const searchWeather = () => {
  const txt = $('#searchBar').val();
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${txt},us&units=imperial&APPID=${weatherKey}`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showResults = () => {
  // const weatherArray = [];
  searchWeather()
    .then((result) => {
      // weatherArray.push(result);
      dom.domString(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });

};

const fiveCast = () => {
  const txt = $('#searchBar').val();
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${txt},us&units=imperial&APPID=${weatherKey}`)
      .done((result) => {
        resolve(result);
        console.log(result);
      }).fail((err) => {
        reject(err);
      });
  });
};

const showFiveCast = () => {
  fiveCast()
    .then((result) => {
      dom.domStringFive(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

module.exports = {
  showResults,
  setKey,
  showFiveCast,
};
