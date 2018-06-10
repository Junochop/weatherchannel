/* eslint camelcase: 0 */

const firebaseApi = require('./firebaseApi');
const weather = require('./weather');

const pressEnter = () => {
  // big old keypress event
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      // const searchZip = $('#searchBar').val().replace(' ', '%20');

      weather.showResults();
      clickCard();
    }
  });
};

const clickCard = () => {
  $('body').on('click', '#myweather', () => {
    weather.showFiveCast();
  });
};

const submitButton = () => {
  $('#submit').on('click', () => {
    weather.showResults();
    clickCard();
  });

};

const saveWeatherToWishlistEvent = () => {
  $(document).on('click', '.addWeatherToWishlist', (e) => {
    const weatherToAddCard = $(e.target).closest('.weather');
    const weatherToAdd = {
      temperature: weatherToAddCard.find('.temp').text(),
      condition: weatherToAddCard.find('.cond').text(),
      wind: weatherToAddCard.find('wind').text(),
    };
    firebaseApi.saveWeatherToWishlist(weatherToAdd)
      .then(() => {
        weatherToAddCard.remove();
      })
      .catch((error) => {
        console.error('error in saving weather', error);
      });
  });
};

const authEvents = () => {
  $('#signin-btn').click((e) => {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, pass)
      // .then((user) => {
      //   $('#myMovies').removeClass('hide');
      //   $('#search').addClass('hide');
      //   $('#authScreen').addClass('hide');
      //   getAllMoviesEvent();
      // })
      .catch((error) => {
        $('#singin-error-msg').text(error.message);
        $('#signin-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  });

  $('#register-btn').click(() => {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch((error) => {
        // Handle Errors here.
        $('#register-error-msg').tex(error.message);
        $('#register-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
        // ...
      });
  });

  $('#register-link').click(() => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  $('#signin-link').click(() => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

  $('#logout').click(() => {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  });

};

const initializer = () => {
  pressEnter();
  submitButton();
  saveWeatherToWishlistEvent();
  authEvents();

};

module.exports = {
  initializer,
};
