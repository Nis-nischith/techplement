async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

   // alert(city);
    const apiKey = '395dcd6c5dd11b309383bf9cecce7bcd'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) {
            alert(data.message);
            return;
        }
        if( data.name.toString().toLowerCase()!= city.toLowerCase())
            alert(`Did you mean ${data.name} ? Showing results for ${data.name}. Click on "OK" to see the weather`);
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    } catch (error) {
        alert("Error fetching weather data");
       alert(error);
    }
}
