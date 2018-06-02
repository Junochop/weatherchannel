const domString = (weather) => {
  let strang = '';

  strang += `<div class="col-sm-6 col-md-4">`;
  strang += `<div class="thumbnail">`;
  strang += `<img src="..." alt="...">`;
  strang += `<div class="caption">`;
  strang += `<h3>${weather.name}</h3>`;
  strang += `<p>${weather.main.humidity}</p>`;

  strang += `</div>`;
  strang += `</div>`;
  strang += `</div>`;

  printToDom(strang);
};

const printToDom = (stringz) => {
  $('#weather').html(stringz);
};

module.exports = {
  domString,
};
