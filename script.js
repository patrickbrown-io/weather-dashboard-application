//Search bar
let searchEl 

for (var i = 0; i < localStorage.length; i++) {

    var city = localStorage.getItem(i);
    // console.log(localStorage.getItem("City"));
    $('#search-history').append('<button id=history-button>'+city+"</button>").on("click",weatherApp)
}

$("#citySearchBtn").on('click', function(){
    event.preventDefault();
    var searchEl = $("#searchInput").val()

    $('#search-history').append('<button id=history-button>'+searchEl+"</button>")
    var local = localStorage.setItem(i,searchEl)

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchEl+'&units=imperial&cnt=40&appid=eabfc1685d3a5a1ea93166e8b31eb771')
    .then(function (response){
        return response.json();
    })

    .then(function (data){
        // console.log(data);
        var cityLat = data.city.coord.lat
        var cityLong = data.city.coord.lon

        // alert(cityLat)
        // alert(cityLong)

        // //////////DAY 0
        // console.log("Day 0----------------------------")
        console.log(data.list[0].dt_txt)
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
        // var Icon = data.list[0].weather[0].icon;

        $(".card").removeClass('hide')
///////////////CREATES WEATHER CARDS
        ///DAY 0
        $("#day0Img").attr("src","http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +".png")
        $("#day0Card h5").text(data.list[0].dt_txt)
        $("#cityName").text(data.city.name)
        $("#temperature0").text("Temperature: "+ data.list[0].main.temp+"F")
        $("#humidity0").text("Humidity: "+data.list[0].main.humidity)
        $("#wind0").text("Wind Speed: "+ data.list[0].main.humidity+" mpg")
        
        /////DAY 1
        $("#day1Img").attr("src","http://openweathermap.org/img/wn/"+data.list[8].weather[0].icon+".png")
        $("#card-title-1").text(data.list[8].dt_txt)
        $("#temperature1").text("Temperature: "+ data.list[8].main.temp+"F")
        $("#humidity1").text("Humidity: "+data.list[8].main.humidity)
        $("#wind1").text("Wind Speed: "+ data.list[8].main.humidity+" mpg")
        ///Day 2
        $("#day2Img").attr("src","http://openweathermap.org/img/wn/"+data.list[16].weather[0].icon+".png")
        $("#card-title-2").text(data.list[16].dt_txt)
        $("#temperature2").text("Temperature: "+ data.list[16].main.temp+"F")
        $("#humidity2").text("Humidity: "+data.list[16].main.humidity)
        $("#wind2").text("Wind Speed: "+ data.list[16].main.humidity+" mpg")
        ///Day 3
        $("#day3Img").attr("src","http://openweathermap.org/img/wn/"+data.list[24].weather[0].icon+".png")
        $("#card-title-3").text(data.list[24].dt_txt)
        $("#temperature3").text("Temperature: "+ data.list[24].main.temp+"F")
        $("#humidity3").text("Humidity: "+data.list[24].main.humidity)
        $("#wind3").text("Wind Speed: "+ data.list[24].main.humidity+" mpg")
        //Day 4
        $("#day4Img").attr("src","http://openweathermap.org/img/wn/"+data.list[32].weather[0].icon+".png")
        $("#card-title-4").text(data.list[32].dt_txt)
        $("#temperature4").text("Temperature: "+ data.list[32].main.temp+"F")
        $("#humidity4").text("Humidity: "+data.list[32].main.humidity)
        $("#wind4").text("Wind Speed: "+ data.list[32].main.humidity+" mpg")        

    })
});

function weatherApp(){
    event.preventDefault();
    var searchTerm = $("#history-button").text()

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+searchTerm+'&units=imperial&cnt=40&appid=eabfc1685d3a5a1ea93166e8b31eb771')
    .then(function (response){
        return response.json();
    })

    .then(function (data){

        $(".card").removeClass('hide')
///////////////CREATES WEATHER CARDS
        ///DAY 0
        $("#day0Img").attr("src","http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +".png")
        $("#day0Card h5").text(data.list[0].dt_txt)
        $("#cityName").text(data.city.name)
        $("#temperature0").text("Temperature: "+ data.list[0].main.temp+"F")
        $("#humidity0").text("Humidity: "+data.list[0].main.humidity)
        $("#wind0").text("Wind Speed: "+ data.list[0].main.humidity+" mpg")
        
        /////DAY 1
        $("#day1Img").attr("src","http://openweathermap.org/img/wn/"+data.list[8].weather[0].icon+".png")
        $("#card-title-1").text(data.list[8].dt_txt)
        $("#temperature1").text("Temperature: "+ data.list[8].main.temp+"F")
        $("#humidity1").text("Humidity: "+data.list[8].main.humidity)
        $("#wind1").text("Wind Speed: "+ data.list[8].main.humidity+" mpg")
        ///Day 2
        $("#day2Img").attr("src","http://openweathermap.org/img/wn/"+data.list[16].weather[0].icon+".png")
        $("#card-title-2").text(data.list[16].dt_txt)
        $("#temperature2").text("Temperature: "+ data.list[16].main.temp+"F")
        $("#humidity2").text("Humidity: "+data.list[16].main.humidity)
        $("#wind2").text("Wind Speed: "+ data.list[16].main.humidity+" mpg")
        ///Day 3
        $("#day3Img").attr("src","http://openweathermap.org/img/wn/"+data.list[24].weather[0].icon+".png")
        $("#card-title-3").text(data.list[24].dt_txt)
        $("#temperature3").text("Temperature: "+ data.list[24].main.temp+"F")
        $("#humidity3").text("Humidity: "+data.list[24].main.humidity)
        $("#wind3").text("Wind Speed: "+ data.list[24].main.humidity+" mpg")
        //Day 4
        $("#day4Img").attr("src","http://openweathermap.org/img/wn/"+data.list[32].weather[0].icon+".png")
        $("#card-title-4").text(data.list[32].dt_txt)
        $("#temperature4").text("Temperature: "+ data.list[32].main.temp+"F")
        $("#humidity4").text("Humidity: "+data.list[32].main.humidity)
        $("#wind4").text("Wind Speed: "+ data.list[32].main.humidity+" mpg")        

    })
}