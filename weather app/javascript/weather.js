let weather = {
    "apiKey": "d1d8732a7afdea0fc946428e4330cb8e",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey,
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log({ name, description, temp, humidity, speed });
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " +  speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "' )"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search_bar").value);
    },
};
document
    .querySelector(".search_button")
    .addEventListener("click", function () {
        weather.search();
    });
document.querySelector(".search_bar").addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        weather.search();
    }
});