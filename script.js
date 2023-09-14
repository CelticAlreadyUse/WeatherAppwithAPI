let weather = {
    apiKey: "e922f7c9c1b461b1ee50d67e1fa1e304",
    fetchWeather :function(city){
        fetch  (
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
          .then((data)=>this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp , humidity} = data.main;
        const {speed}=data.wind; 
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".windspeed").innerText = speed + "km/h";
        document.getElementById('weather-loading').style.display ="block";
        document.getElementById('background').style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name+ "')"
    },
   
    search : function(){
        this.fetchWeather(document.getElementById('search').value);
    }
};

//Metode Fetch() memulai proses pengambilan sumber daya dari server.
//Itu mengambil() metode mengembalikan Janji yang memutuskan ke objek Respons.

document.getElementById('searchBtn').addEventListener('click',()=>{
    weather.search();
});
document.getElementById('search').addEventListener('keyup',function (event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("japan");