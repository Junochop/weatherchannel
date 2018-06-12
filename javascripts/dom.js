const domString = (weather) => {
  let strang = '';

  strang += `<div id="myweather" class="col-sm-6 col-md-4">`;
  strang += `<div  class="thumbnail">`;
  strang += `<div class="caption">`;
  strang += `<h3>Current Location: ${weather.name}</h3>`;
  strang += `<p>Temp: ${weather.main.temp} &#8457;</p>`;
  strang += `<p>Condition: ${weather.weather[0].main}</p>`;
  strang += `<p><a class="btn btn-default" id="saveFiveButton" role="button">5 Days Forecast</a></p>`;
  strang += `</div>`;
  strang += `</div>`;
  strang += `</div>`;

  printToDom(strang);
};

const domStringFive = (weather) => {
  let strang = '';
  const fivedayList = weather.list;
  for (let i = 0; i < fivedayList.length; i += 8) {

    strang += `<div class="col-sm-6 col-md-4 weather">`;
    strang += `<div  class="thumbnail">`;
    strang += `<div class="caption">`;
    strang += `<h3 class="temp">Temp: ${fivedayList[i].main.temp} &#8457</h3>`;
    strang += `<p class="cond">Condition: ${fivedayList[i].weather[0].description}</p>`;
    strang += `<p class="press">Pressure: ${fivedayList[i].main.pressure} cm</p>`;
    strang += `<p class="wind">Wind Speed: ${fivedayList[i].wind.speed} mph</p>`;
    strang += `<p class="date">Date & Time: ${fivedayList[i].dt_txt}</p>`;
    strang += `<p><a class="btn btn-default addWeatherToWishlist" role="button">Save</a></p>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;
  };
  // return strang;

  printToDom(strang);
};

const savedomString = (weather) => {
  let strang = '';
  weather.forEach((spot) => {
    strang += `<div id="myweather" class="col-sm-6 col-md-4 deletable">`;
    strang += `<div class="thumbnail">`;
    strang += `<div class="caption">`;
    strang += `<h3>${spot.condition}</h3>`;
    strang += `<p>${spot.temperature}</p>`;
    strang += `<p>${spot.wind}</p>`;
    strang += `<p><a class="btn btn-danger scaryButton" role="button">Scarrrred</a></p>`;
    strang += `<p><a class="btn btn-default deleteButton deleteWeatherFromCollectionEvent" role="button">X</a></p>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;
  });
  printToDom(strang);
};

const printToDom = (stringz) => {
  $('#weather').html(stringz);
};

module.exports = {
  domString,
  domStringFive,
  savedomString,
};
