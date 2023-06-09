import { Routes, Route, Link } from "react-router-dom";
import { app } from "./FireConfig/FireConfig";
import { AuthContextProvider } from "./context/AuthContext";

import Homepage from "./pages/Homepage";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";
import Chat from "./pages/Chat";
import ProtectedRoute from "./routes/ProtectedRoute";
import MessageForm from "./pages/MessageForm";
import Moodify from "./pages/Moodify";




function App() {
  console.log("app", app);
  return (
    
      <AuthContextProvider>
      <div>
        <Navbar />
      <Routes>
      
        <Route path="/home" element={<Homepage />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/moodify" element={<Moodify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messageform"
          element={
            <ProtectedRoute>
              <MessageForm />
            </ProtectedRoute>
          }
        />
      </Routes>
      </div>
    </AuthContextProvider>
    
    
  );
}

export default App;
