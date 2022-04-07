import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';

import SignUpPage from './pages/SignUpPage';

import TripBoard from './pages/TripBoard';
import Dashboard from './pages/Dashboard';
import HighlightsPage from './pages/HighlightsPage';

import './App.css';
import Navbar from './components/Navbar';
import AddTrip from './components/AddTrip';
import PrivateRoute from './components/PrivateRoute';

function App() {
  //   const { currentUser } = useAuth();
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addtrip" element={<AddTrip />} />
            <Route path="/tripboard" element={<TripBoard />} />
            <Route path="/highlight" element={<HighlightsPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
