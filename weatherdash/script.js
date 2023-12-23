const searchButton = document.querySelector(".search-btn");
const cityInput = document.querySelector(".city-input")

const API_KEY = "6d2bf01f274da79137d9f7f0725fa218";

const cityDisplay = document.querySelector(".cityanddate")

const temp = document.querySelector(".temp")
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weather = document.querySelector('.weather')

const flex = document.querySelector('.flex')
const locationBtn = document.querySelector('.location-btn')



function weatherCards(arr) {
    flex.innerHTML = ""; //clearng the prev values
    arr.map((x) => {
        flex.innerHTML +=
            `<div class="card">
            <h4> ${x.dt_txt.split(" ", 1)}</h4>
            <h4>Temp: ${x.main.temp} °C</h4>
            <h4>Humidity:${x.main.humidity}%</h4>
        </div>`
    })

    arr.map((x) => {

        console.log(x)
    })
}



const getWeatherDetails = async (lat, lon) => {
    const sevenDay = [];
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    await fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        cityDisplay.innerHTML = data.city.name + "(" + data.list[0].dt_txt.split(" ", 1) + ")";
        temp.innerHTML = 'Temperature: ' + data.list[0].main.temp + ' °C';
        wind.innerHTML = 'Wind: ' + data.list[0].wind.speed + ' M/s';
        humidity.innerHTML = 'Humidity: ' + data.list[0].main.humidity + ' %';
        weather.innerHTML = data.list[0].weather[0].main;
        document.querySelector('.iconss').src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
        // console.log(data)
        let cntr = 5;
        for (let i = 0; i < 6; i++) { //getting weather data for 5 days
            if (cntr <= data.list.length)
                sevenDay.push(data.list[cntr])
            cntr += 8; //for each 8 the day is changed
        }

        weatherCards(sevenDay)

        // sevenDay.map((x)=>console.log(x))// 5 days data


    }).catch((e) => {
        // console.log("e>>>", e);
        console.log("an error occured while fetching the weather forecast", e.message)
    })

}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if (!cityName) {
        alert('Please enter a valid name')
        return;
    }

    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;


    //GET entered city coordinates (latitude, longitude and name) from the API response
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if (!data.length) return alert(`No coordinates found for ${cityName}`)
        // console.log(data)
        const { name, lat, lon } = data[0];
        // console.log(name, lat, lon);
        getWeatherDetails(lat, lon);

    }).catch(() => {
        alert("an error occured while fetching the coordinates")
    })
}

const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition( //for getting user's current location
        position => {
            const { latitude, longitude } = position.coords;
            getWeatherDetails(latitude, longitude)
        },
        error => {
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation permission denied. Please reset location permission to grant access again ")
            }
        }
    )
}

locationBtn.addEventListener('click', getUserCoordinates)
searchButton.addEventListener("click", getCityCoordinates);
