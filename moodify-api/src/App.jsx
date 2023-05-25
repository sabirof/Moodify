import { Routes, Route, Link } from "react-router-dom";
import { app } from "./FireConfig/FireConfig";

import Homepage from "./pages/Homepage";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";

function App() {
  console.log("app", app);
  return (
    
      <AuthContextProvider>
      <div>
        <Navbar />
      <Routes>
      
        <Route path="/home" element={<Homepage />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </div>
    </AuthContextProvider>
    
    
  );
}

export default App;
