const cityName = document.querySelector('.cityName')
const temp = document.querySelector('.temp')
const weather = document.querySelector('.weathe')
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const citySearch = () =>
{
    const cityNameValue = document.querySelector('.cityNameValue').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
        .then((resp) => resp.json())
        .then((data) =>
        {
            if (data?.main?.temp) temp.innerHTML = data.main.temp -273 > 0 ? '+' + (data.main.temp - 273).toFixed(1) + '&deg' + 'C' : (data.main.temp - 273).toFixed(1) + '&deg' + 'C'
            else temp.innerHTML = '...'
            cityName.innerHTML = data?.name ? data.name : 'Город не найден'
            weather.innerHTML = temp.innerHTML === '...' ? '...' : data.weather[0].description
        })
}
document.querySelector('.cityNameValue').onkeydown = (e) =>
{
    if(e.keyCode === 13) citySearch()
}