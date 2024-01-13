//librerie esterne tipo react poi componenti interni poi stili poi risorse o file
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavBar';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<SearchPage />}/>
        <Route path="/ResultsPage/:elementId" element={<ResultsPage />}/>    questo deve ottenere tramite path il value della ricerca
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
