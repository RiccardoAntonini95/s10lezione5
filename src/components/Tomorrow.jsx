import { useEffect, useState } from "react"
import { Badge, ListGroup } from "react-bootstrap"
import Loading from "./Loading"

const apiKey = "87d11aeb87f6612d1e2ba097c7433b19"
const prova2 = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1647345600,
        "main": {
          "temp": 284.83,
          "feels_like": 283.59,
          "temp_min": 284.83,
          "temp_max": 285.69,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 964,
          "humidity": 59,
          "temp_kf": -0.86
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.7,
          "deg": 288,
          "gust": 2.1
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-03-15 12:00:00"
      },//qua  finisce il singolo oggetto quindi fai prova2.list[0].cosechemetti
      {
        "dt": 1647356400,
        "main": {
          "temp": 285.09,
          "feels_like": 283.85,
          "temp_min": 285.09,
          "temp_max": 285.6,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 961,
          "humidity": 58,
          "temp_kf": -0.51
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.24,
          "deg": 26,
          "gust": 2.56
        },
        "visibility": 10000,
        "pop": 0.26,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-03-15 15:00:00"
      },
      {
        "dt": 1647367200,
        "main": {
          "temp": 283.03,
          "feels_like": 281.89,
          "temp_min": 282.13,
          "temp_max": 283.03,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 961,
          "humidity": 71,
          "temp_kf": 0.9
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.41,
          "deg": 169,
          "gust": 4.81
        },
        "visibility": 10000,
        "pop": 0.31,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-03-15 18:00:00"
      },
       {
        "dt": 1647766800,
        "main": {
          "temp": 278.26,
          "feels_like": 274.33,
          "temp_min": 278.26,
          "temp_max": 278.26,
          "pressure": 1030,
          "sea_level": 1030,
          "grnd_level": 966,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 18
        },
        "wind": {
          "speed": 5.66,
          "deg": 89,
          "gust": 8.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-03-20 09:00:00"
      }
    ],
    "city": {
      "id": 2867714,
      "name": "Munich",
      "coord": {
        "lat": 48.1374,
        "lon": 11.5755
      },
      "country": "DE",
      "population": 1260391,
      "timezone": 3600,
      "sunrise": 1647322046,
      "sunset": 1647364681
    }
  }

const Tomorrow = ({cityName}) => {

    return(
       <div>
            <div className="city-bar">
                 {cityName}, {prova2.city.country}, Tomorrow
            </div>
            <div className="d-flex justify-content-between">
                <div>
                <img src={`https://openweathermap.org/img/wn/${prova2.list[0].weather[0].icon}@2x.png`} alt="weather-img" />
                <Badge bg = {prova2.list[0].main.temp > 15? "danger" : "info"}>{prova2.list[0].main.temp}°C</Badge>   
                <p className="fst-italic text-white">{prova2.list[0].weather[0].main}</p>
                <p className="fst-bold text-white">{prova2.list[0].weather[0].description}</p>
                </div>
                <ListGroup>
                    <ListGroup.Item variant="info">Wind: {prova2.list[0].wind.speed} km/h</ListGroup.Item>
                    <ListGroup.Item variant="info">Humidity: {prova2.list[0].main.humidity} % </ListGroup.Item>
                    <ListGroup.Item variant="info">Pressure: {prova2.list[0].main.pressure} mb </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <Badge bg = {prova2.list[0].main.temp_min > 15? "danger" : "info"}>Min.{prova2.list[0].main.temp_min}°C</Badge> 
            <Badge bg = {prova2.list[0].main.temp_max > 15? "danger" : "info"}>Max.{prova2.list[0].main.temp_max}°C</Badge>
            </div>
        </div>
    )
}

export default Tomorrow