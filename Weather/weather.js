
//console.log(top);
var x = document.querySelector(".weather-info");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
  grabData(position.coords.latitude, position.coords.longitude);
    });
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function grabData(lat, long) {
  fetch("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long)
  .then( (res) => res.json())
  .then((data) => {
    console.log(data);
    let saida = `
      <p>${data.weather[0].icon} ${data.main.temp}°C </p>
      <div class="infos">
        <div class="box">
          <p>${data.name}</p>
        </div>
        <div class="box">
          <p>${data.weather[0].description}</p>
        </div>
        <div class="box">
          <p>SW ${data.wind.speed} knots</p>
        </div>
      </div>
    `;
    console.log(typeof data);
    console.log("aaaaaaaaaaaaaaa");

    document.querySelector(".saida").innerHTML = saida
  });

}
