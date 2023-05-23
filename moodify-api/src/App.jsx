import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Genres from './pages/Genres';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
