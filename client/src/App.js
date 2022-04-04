import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
/* import AuthProvider from "./contexts/AuthContext"; */
/* import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage"; */
=======
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
>>>>>>> 1f9496f8d1260bdd0f6aafe13d238c4bca6453cf
import TripBoard from "./pages/TripBoard";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
        {/* <AuthProvider> */}
            <Router>
                <Navbar />
                <Routes>
<<<<<<< HEAD
                   {/*  <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} /> */}
=======
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<LoginPage />} />
>>>>>>> 1f9496f8d1260bdd0f6aafe13d238c4bca6453cf
                    <Route path="/tripboard" element={<TripBoard />} />
                </Routes>
            </Router>
        {/* </AuthProvider> */}
        </>
    );
}

export default App;
