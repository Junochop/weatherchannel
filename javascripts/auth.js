const events = require('./events');
const { setUID, } = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#searchDiv').removeClass('hide');
      // $('#search').addClass('hide');
      $('#myWeather').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#mine, #navSearch, #logout').removeClass('hide');
      $('#authenticate').addClass('hide');
      events.getAllWeatherEvent();
    } else {
      $('#searchDiv').addClass('hide');
      // $('#search').addClass('hide');
      $('#myWeather').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#mine, #navSearch, #logout').addClass('hide');
      $('#authenticate').removeClass('hide');

    }
  });
};

module.exports = {
  checkLoginStatus,
};
