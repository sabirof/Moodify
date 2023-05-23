import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Genres from './pages/Genres';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </AuthContextProvider>
    
  );
}

export default App;
