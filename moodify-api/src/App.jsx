import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Homepage from './pages/Homepage';
import Moodify from './pages/Moodify';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import Chat from './pages/Chat';
import ProtectedRoute from './routes/ProtectedRoute';
import MessageForm from './pages/MessageForm';

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
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
          {/* Default route with Redirect to /home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
