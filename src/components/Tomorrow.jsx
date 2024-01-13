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
       <div>
            <div className="city-bar">
            {isLoading && <Loading />}
                 {cityName}, {forecastData.city.country}, Tomorrow
            </div>
            <div className="d-flex justify-content-between">
                <div>
                <img src={`https://openweathermap.org/img/wn/${forecastData.list[10].weather[0].icon}@2x.png`} alt="weather-img" />
                <Badge bg = {forecastData.list[10].main.temp > 15? "danger" : "info"}>{forecastData.list[10].main.temp}°C</Badge>   
                <p className="fst-italic text-white">{forecastData.list[10].weather[0].main}</p>
                <p className="fst-bold text-white">{forecastData.list[10].weather[0].description}</p>
                </div>
                <ListGroup>
                    <ListGroup.Item variant="info">Wind: {forecastData.list[10].wind.speed} km/h</ListGroup.Item>
                    <ListGroup.Item variant="info">Humidity: {forecastData.list[10].main.humidity} % </ListGroup.Item>
                    <ListGroup.Item variant="info">Pressure: {forecastData.list[10].main.pressure} mb </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
            <Badge bg = {forecastData.list[10].main.temp_min > 15? "danger" : "info"}>Min.{forecastData.list[10].main.temp_min}°C</Badge> 
            <Badge bg = {forecastData.list[10].main.temp_max > 15? "danger" : "info"}>Max.{forecastData.list[10].main.temp_max}°C</Badge>
            </div>
      </div>
      )}
      </>
    )
}

export default Tomorrow