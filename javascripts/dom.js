const domString = (weather) => {
  let strang = '';

  strang += `<div id="myweather" class="col-sm-6 col-md-4">`;
  strang += `<div  class="thumbnail">`;
  strang += `<div class="caption">`;
  strang += `<h3>Current Location: ${weather.name}</h3>`;
  strang += `<p>Teamp: ${weather.main.temp} &#8457;</p>`;
  strang += `<p>Condition: ${weather.weather[0].main}</p>`;
  strang += `<p>Click the card for 5 day Forecast</p>`;
  strang += `</div>`;
  strang += `</div>`;
  strang += `</div>`;

  printToDom(strang);
};

const domStringFive = (weather) => {
  let strang = '';
  const fivedayList = weather.list;
  console.log('ddd', fivedayList.length);
  // fivedayList.forEach(day => {

  for (let i = 0; i < fivedayList.length; i += 8) {

    strang += `<div id="myweather" class="col-sm-6 col-md-4">`;
    strang += `<div  class="thumbnail">`;
    strang += `<div class="caption">`;
    strang += `<h3>Temp: ${fivedayList[i].main.temp} &#8457</h3>`;
    strang += `<p>Condition: ${fivedayList[i].weather[0].description}</p>`;
    strang += `<p>Pressure: ${fivedayList[i].main.pressure} cm</p>`;
    strang += `<p>Wind Speed: ${fivedayList[i].wind.speed} mph</p>`;
    strang += `<p>Date & Time: ${fivedayList[i].dt_txt}</p>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;
  };
  // return strang;

  printToDom(strang);
};

const printToDom = (stringz) => {
  $('#weather').html(stringz);
};

module.exports = {
  domString,
  domStringFive,
};
