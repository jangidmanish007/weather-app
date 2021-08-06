


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
     key:"fec9c8a050ae03eb0571fb0ecf7c7b68",
     baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

// Event leistner function on keypress 

const searchinputBox = document.getElementById('input-box');

searchinputBox.addEventListener('keypress', (event) => {
   
   if(event.keyCode == 13) {
    console.log(searchinputBox.value); 
    getWeatherReport(searchinputBox.value); 
    document.querySelector('.weather-body').style.display="block";
}
});

// Get Weather Report

function getWeatherReport(city){ 
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather => {
        return weather.json();
    })
    .then(showWeatherReport);
};



// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);
    

    let city =document.getElementById('city');
    city.innerText =`${weather.name},${weather.sys.country}`;

    let temp =document.getElementById('temp');
    temp.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;


    let minmax =document.getElementById('min-max');
    minmax.innerHTML =`${Math.floor(weather.main.temp_min)}&deg;C (min)  /
                      ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;


    let weathertype =document.getElementById('weather');
    weathertype.innerHTML=`${weather.weather[0].main}`;   
    
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
  
      if(weathertype.textContent =='Clear'){
        document.body.style.backgroundImage ="url('image/clear.jpg')";
    }
    else if(weathertype.textContent =='Clouds'){
        document.body.style.backgroundImage ="url('image/cloudy.jpg')";
    }
    else if(weathertype.textContent =='Mist'){
        document.body.style.backgroundImage ="url('image/mist.jpg')";
    }
    else if(weathertype.textContent =='Rain'){
        document.body.style.backgroundImage ="url('image/rain.jpg')";
    }
    else if(weathertype.textContent =='Snow'){
        document.body.style.backgroundImage ="url('image/snow.jpg')";
    }
    else if(weathertype.textContent =='Thunderstorm'){
        document.body.style.backgroundImage ="url('image/strom.jpg')";
    }
}


//Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}) ${year}`;
}