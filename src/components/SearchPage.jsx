import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Today from './Today';

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (query) => {
    setInputValue(query)
  }


  return (
    <>
    <div className="d-flex flex-column align-items-center search-container">
      <h1>WeatherCloud</h1>
    <h2 className="text-primary mt-5">Search for a city and press the button: </h2>
      <Form.Control
        type="search"
        placeholder="Your city..."
        className="me-2"
        aria-label="Search"
        onChange={(e) => {handleInputChange(e.target.value)}}
      />
      <Button variant="outline-primary" className="mt-3" onClick={() => navigate(`/ResultsPage/${inputValue}`)}>Search</Button>
    </div>
    <div className="d-flex mt-3 justify-content-between gap-2">
      <Today cityName="London"/>
      <Today cityName="Hong Kong"/>
      <Today cityName="New York"/>
    </div>
    </>
  )
}

export default SearchPage;