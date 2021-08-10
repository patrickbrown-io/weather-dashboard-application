// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


//API KEY
const APIKey = "54123fbf0da279d26be1750e4bf7181c";
//Search bar
const searchEl = document.getElementById("searchInput").val;

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


///CITY NAME
// https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=54123fbf0da279d26be1750e4bf7181c

$("#citySearchBtn").on('click', function(){
    event.preventDefault();
            ///Change DENVER to citySearch value and concat
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=denver&units=imperial&cnt=40&appid=54123fbf0da279d26be1750e4bf7181c')
    // fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=denver&cnt=5&appid=d5da65a1b7938f90d55e1d6961ade256')

    .then(function (response){
        return response.json();
    })

    .then(function (data){
        console.log(data)

        ///if statement for i down there
        //////////DAY 0
        console.log("Day 0----------------------------")
        //city
        console.log(data.city.name);

        //icon, ICON URL openweathermap.org/img/wn/{THISDATAHERE}@2x.png
        console.log(data.list[0].weather[0].icon);

        //temp
        console.log(data.list[0].main.temp)

        //humidity
        console.log(data.list[0].main.humidity);

        //wind
        console.log(data.list[0].wind.speed);

    })

});






    // $.ajax({url:'api.openweathermap.org/data/2.5/forecast?q=denver&appid=54123fbf0da279d26be1750e4bf7181c',
    //         method: "GET",})

    // )});