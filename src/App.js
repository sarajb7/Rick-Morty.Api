import './App.scss';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharactersPage/CharacterPage';
import Episodes from './pages/EpisodesPage/EpisodePage';


function App() {
  return (
    <Router>
    <div className="main">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/characters' element={<CharacterPage/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
