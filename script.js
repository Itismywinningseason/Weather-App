const weatherData = {
  Syracuse: {
    temp: 75,
    wind: 10,
    humidity: 88,
    precipitation: 25,
  },
  Saginaw: {
    temp: 70,
    wind: 5,
    humidity: 80,
    precipitation: 30,
  },
  Greensboro: {
    temp: 78,
    wind: 2,
    humidity: 60,
    precipitation: 20,
  },
};

document.getElementById("location").addEventListener("change", (evt) => {
  const selectedCity = evt.target.value;
  console.log(weatherData[selectedCity]);

  document.getElementById("todaysTemp").innerHTML =
    weatherData[selectedCity].temp;

  document.getElementById(
    "todaysDetails"
  ).innerHTML = `Precipitation: ${weatherData[selectedCity].precipitation}%<br/>
  Humidity: ${weatherData[selectedCity].humidity}%<br/>
  Wind: ${weatherData[selectedCity].wind}mph`;
});

const data = await Response.json();
console.log(data);
const lat = data[0].lat;
const long = data[0].lon;

const weatherRequest = await fetch (
  ``
)
};

console.log(weatherData[selectedCity]);
document.getElementById("todaysTemp").innerHTML =
  weatherData[selectedCity].temp;

document.getElementById(
  "todaysDetails"
).innerHTML = `Precipitation: ${weatherData[selectedCity].precipChance}%<br />
Humidity: ${weatherData[selectedCity].humidity}%br />
Wind: ${weatherData[selectedCity].wind}mph`;
};

updateHTML();