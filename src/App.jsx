import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import HousesPage from "./pages/HousesPage/HousesPage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage"
import HouseDetailPage from "./pages/HouseDetailPage/HouseDetailPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="characters/:id" element={<CharacterDetailPage />} />
          <Route path="houses" element={<HousesPage />} />
          <Route path="houses/:id" element={<HouseDetailPage />} />
          <Route path="chronology" element={<ChronologyPage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
