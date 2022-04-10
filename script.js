const loadWeather = ()=>{
    document.getElementById("display-div").innerHTML='';
    document.getElementById("display-error").innerHTML='';
    const searchBox = document.getElementById("search-field");
    const city = searchBox.value;
    searchBox.value='';

    fetch(`https://api.weatherapi.com/v1/current.json?key=3ed5346737c14e0bad1193253220904&q=${city}`)
    .then(res=>res.json())
    .then(data=>displayDetails(data))
    .catch(error=>showError(city))
}

const displayDetails = (data)=>{
    const displayDiv = document.getElementById("display-div");
    const newDiv = document.createElement("div");
    newDiv.innerHTML=`
        <h1>${data.location.name}</h1>
        <h2>${data.location.country}</h2>
        <img src=${data.current.condition.icon} alt="">
        <h3><strong>${data.current.condition.text}</strong></h3>
        <p>Humidity: <strong>${data.current.humidity}</strong></p>
        <h4>Temperature: ${data.current.temp_c} °C</h4>
        <small>Last updated: <i>${data.current.last_updated}</i></small>
    `;
    displayDiv.appendChild(newDiv);
}

const showError = (city) =>{
    const errorDiv = document.getElementById("display-error");
    const newDiv = document.createElement("div");
    newDiv.innerHTML=`
        <h4 class="text-danger">Warning!!! Can't find the info of ${city}.</h4>
        <h3>Please insert a valid city name...</h3>
    `;
    errorDiv.appendChild(newDiv);
}