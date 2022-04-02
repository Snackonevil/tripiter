import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <h1>TRIPITER</h1>
                </div>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
