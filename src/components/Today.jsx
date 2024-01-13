//cityname va dentro alla fetch come nome città, usa una costante anche per la key
//cosa otterrò dall'api a seguire: weather.main che è che tempo -- weather.icon che è l'icona che mi serve dinamica 
//main.temp e gli altri in base a quanta roba c'entra temp min, max e feelslike, anche il wind.deg viene figo se metto una freccia in base al numero

import { useEffect, useState } from "react"
import { Badge, ListGroup } from "react-bootstrap"
import Loading from "./Loading"

const prova = {
    "coord": {
      "lon": -0.13,
      "lat": 51.51
    },
    "weather": [
      {
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 280.32,
      "pressure": 1012,
      "humidity": 81,
      "temp_min": 279.15,
      "temp_max": 281.15
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.1,
      "deg": 80
    },
    "clouds": {
      "all": 90
    },
    "dt": 1485789600,
    "sys": {
      "type": 1,
      "id": 5091,
      "message": 0.0103,
      "country": "GB",
      "sunrise": 1485762037,
      "sunset": 1485794875
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
    }

    // fine prova

const apiKey = "87d11aeb87f6612d1e2ba097c7433b19"

const Today = ({cityName}) => {

    const [forecastData, setForecastData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getForecast()
        console.log("useEffect")
    }, [])

    const getForecast = async () => {
            try{
                setIsLoading(true)
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
                if(response.ok){
                    setIsLoading(false)
                    const data = await response.json()
                    console.log(data)
                    setForecastData(data)
                    console.log(forecastData)
                } else {
                    console.log("Errore del fetch")
                }
            } catch(err){
                console.log("Errore:", err)
            }
    }
   return(
    <>
    {forecastData && (
        <div className="today-component">
            {isLoading && <Loading />}
            <div className="city-bar">
                 {cityName}, {forecastData.sys.country}, Today
            </div>
            <div className="d-flex justify-content-evenly">
                <div>
                <img src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`} alt="weather-img" />
                <Badge bg = {forecastData.main.temp > 15? "danger" : "info"}>{forecastData.main.temp}°C</Badge> 
                <p className="fst-italic text-white">{forecastData.weather[0].main}</p>
                <p className="fst-bold text-white">{forecastData.weather[0].description}</p>
                </div>
                <ListGroup>
                    <ListGroup.Item>Wind: {forecastData.wind.speed} km/h</ListGroup.Item>
                    <ListGroup.Item>Humidity: {forecastData.main.humidity} % </ListGroup.Item>
                    <ListGroup.Item>Pressure: {forecastData.main.pressure} mb </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <Badge bg = {forecastData.main.temp_min > 15? "danger" : "info"}>Min.{forecastData.main.temp_min}°C</Badge> 
            <Badge bg = {forecastData.main.temp_max > 15? "danger" : "info"}>Max.{forecastData.main.temp_max}°C</Badge>
            </div>
        </div>
    )}
    </>
    )
} 

export default Today