import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (query) => {
    setInputValue(query)
  }


  return (
    <>
    <div className="d-flex flex-column align-items-center search-container">
    <h1 className="text-primary mt-5">Search for a city and press the button: </h1>
      <Form.Control
        type="search"
        placeholder="Your city..."
        className="me-2"
        aria-label="Search"
        onChange={(e) => {handleInputChange(e.target.value)}}
      />
      <Button variant="outline-primary" className="mt-3" onClick={() => navigate(`/ResultsPage/${inputValue}`)}>Search</Button>
    </div>
    </>
  )
}

export default SearchPage;