//  const { getAllMoviesEvent, } = require('./events');
const { setUID, } = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#searchDiv').removeClass('hide');
      // $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#mine, #navSearch, #logout').removeClass('hide');
      $('#authenticate').addClass('hide');
      // getAllMoviesEvent();
    } else {
      $('#searchDiv').addClass('hide');
      // $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#mine, #navSearch, #logout').addClass('hide');
      $('#authenticate').removeClass('hide');

    }
  });
};

module.exports = {
  checkLoginStatus,
};
