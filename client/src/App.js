import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import TripBoard from "./pages/TripBoard";
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
                        <Route path="/signup" element={<LoginPage />} />
                        <Route path="/tripboard" element={<TripBoard />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
