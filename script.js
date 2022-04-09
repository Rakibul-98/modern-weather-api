const loadWeather = ()=>{
    const searchBox = document.getElementById("search-field");
    const city = searchBox.value;
    searchBox.value='';

    fetch(`https://api.weatherapi.com/v1/current.json?key=3ed5346737c14e0bad1193253220904&q=${city}`)
    .then(res=>res.json())
    .then(data=>displayDetails(data));
}

const displayDetails = (data)=>{
    const displayDiv = document.getElementById("display-div");
    const newDiv = document.createElement("div");
    newDiv.innerHTML=`
        <h3>${data.location.name}</h3>
        <h2>${data.location.country}</h2>
        <img src=${data.current.condition.icon} alt="">
        <p>${data.current.condition.text}</p>
        <p>${data.current.humidity}</p>
        <h4>Temperature: ${data.current.temp_c} C</h4>
        <small>${data.current.last_updated}</small>
    `;
    displayDiv.appendChild(newDiv);
}