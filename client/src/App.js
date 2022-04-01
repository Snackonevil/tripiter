import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
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
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
