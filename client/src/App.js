import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";


import SignUpPage from "./pages/SignUpPage";

import TripBoard from "./pages/TripBoard";
import Dashboard from "./pages/Dashboard";
import AddTrip from "./components/AddTrip";


import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/addTrip" element={<AddTrip />} />
                        <Route path="/tripboard" element={<TripBoard />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
