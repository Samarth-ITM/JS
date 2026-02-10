function getWeather() 
{
    fetch("https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current_weather=true")
        .then(response => response.json())
        .then(data => 
            {
            const weather = data.current_weather;

            document.getElementById("temp").textContent = weather.temperature + " °C";

            document.getElementById("wind").textContent = "Wind: " + weather.windspeed + " km/h";

            document.getElementById("condition").textContent = "Weather loaded successfully";
        })

        .catch(error => 
            {
            document.getElementById("condition").textContent = "Error 404 : Page not Found";
            });
}


const loader= document.getElementById("loader");
async function loaderfunction() {
    setTimeout(() => {
        getWeather();
        loader.style.display="none";
    }, 1000);
}

loaderfunction();

getWeather();