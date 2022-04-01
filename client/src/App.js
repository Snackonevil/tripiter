import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <h1>TRIPITER</h1>
            </div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
