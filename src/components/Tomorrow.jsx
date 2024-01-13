import { useEffect, useState } from "react"
import { Badge, ListGroup } from "react-bootstrap"
import Loading from "./Loading"

const apiKey = "87d11aeb87f6612d1e2ba097c7433b19"

const Tomorrow = ({cityName}) => {
  const [forecastData, setForecastData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getForecast()
        console.log("useEffect")
    }, [])

    const getForecast = async () => {
            try{
                setIsLoading(true)
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
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
      {forecastData &&(
       <div className="today-component d-flex justify-content-between gap-2">
        <div>
            <div className="city-bar">
            {isLoading && <Loading />}
                 {cityName}, {forecastData.city.country}, {forecastData.list[1].dt_txt}
            </div>
            <div className="d-flex justify-content-between">
                <div>
                <img src={`https://openweathermap.org/img/wn/${forecastData.list[1].weather[0].icon}@2x.png`} alt="weather-img" />
                <Badge bg = {forecastData.list[1].main.temp > 15? "danger" : "info"}>{forecastData.list[1].main.temp}°C</Badge>   
                <p className="fst-italic text-white">{forecastData.list[1].weather[0].main}</p>
                <p className="fst-bold text-white">{forecastData.list[1].weather[0].description}</p>
                </div>
                <ListGroup>
                    <ListGroup.Item variant="info">Wind: {forecastData.list[1].wind.speed} km/h</ListGroup.Item>
                    <ListGroup.Item variant="info">Humidity: {forecastData.list[1].main.humidity} % </ListGroup.Item>
                    <ListGroup.Item variant="info">Pressure: {forecastData.list[1].main.pressure} mb </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <Badge bg = {forecastData.list[1].main.temp_min > 15? "danger" : "info"}>Min.{forecastData.list[1].main.temp_min}°C</Badge> 
            <Badge bg = {forecastData.list[1].main.temp_max > 15? "danger" : "info"}>Max.{forecastData.list[1].main.temp_max}°C</Badge>
            </div>
           </div>
           <div>
            <div className="city-bar">
            {isLoading && <Loading />}
                 {cityName}, {forecastData.city.country}, {forecastData.list[2].dt_txt}
            </div>
            <div className="d-flex justify-content-between">
                <div>
                <img src={`https://openweathermap.org/img/wn/${forecastData.list[2].weather[0].icon}@2x.png`} alt="weather-img" />
                <Badge bg = {forecastData.list[2].main.temp > 15? "danger" : "info"}>{forecastData.list[2].main.temp}°C</Badge>   
                <p className="fst-italic text-white">{forecastData.list[2].weather[0].main}</p>
                <p className="fst-bold text-white">{forecastData.list[2].weather[0].description}</p>
                </div>
                <ListGroup>
                    <ListGroup.Item variant="info">Wind: {forecastData.list[2].wind.speed} km/h</ListGroup.Item>
                    <ListGroup.Item variant="info">Humidity: {forecastData.list[2].main.humidity} % </ListGroup.Item>
                    <ListGroup.Item variant="info">Pressure: {forecastData.list[2].main.pressure} mb </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <Badge bg = {forecastData.list[2].main.temp_min > 15? "danger" : "info"}>Min.{forecastData.list[2].main.temp_min}°C</Badge> 
            <Badge bg = {forecastData.list[2].main.temp_max > 15? "danger" : "info"}>Max.{forecastData.list[2].main.temp_max}°C</Badge>
            </div>
            </div>
            <div>
            <div className="city-bar">
            {isLoading && <Loading />}
                 {cityName}, {forecastData.city.country}, {forecastData.list[3].dt_txt}
            </div>
            <div className="d-flex justify-content-between">
                <div>
                <img src={`https://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@2x.png`} alt="weather-img" />
                <Badge bg = {forecastData.list[3].main.temp > 15? "danger" : "info"}>{forecastData.list[3].main.temp}°C</Badge>   
                <p className="fst-italic text-white">{forecastData.list[3].weather[0].main}</p>
                <p className="fst-bold text-white">{forecastData.list[3].weather[0].description}</p>
                </div>
                <ListGroup>
                    <ListGroup.Item variant="info">Wind: {forecastData.list[3].wind.speed} km/h</ListGroup.Item>
                    <ListGroup.Item variant="info">Humidity: {forecastData.list[3].main.humidity} % </ListGroup.Item>
                    <ListGroup.Item variant="info">Pressure: {forecastData.list[3].main.pressure} mb </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <Badge bg = {forecastData.list[3].main.temp_min > 15? "danger" : "info"}>Min.{forecastData.list[3].main.temp_min}°C</Badge> 
            <Badge bg = {forecastData.list[3].main.temp_max > 15? "danger" : "info"}>Max.{forecastData.list[3].main.temp_max}°C</Badge>
            </div>
            </div>
      </div>
      )}
      </>
    )
}

export default Tomorrow