const weather = require('./weather');

// const pressEnter = () => {
//   // big old keypress event
//   $(document).keypress((e) => {
//     if (e.key === 'Enter') {
//       // const searchZip = $('#searchBar').val().replace(' ', '%20');
//       const searchZip = $('#searchBar').val();
//       weather.showResults(searchZip);
//     }
//   });
// };

const pressEnter = () => {
  // big old keypress event
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      // const searchZip = $('#searchBar').val().replace(' ', '%20');

      weather.showResults();
    }
  });
};

const submitButton = () => {
  $('#submit').on('click', () => {
    weather.showResults();
  });

};

const initializer = () => {
  pressEnter();
  submitButton();
};

module.exports = {
  initializer,
};
