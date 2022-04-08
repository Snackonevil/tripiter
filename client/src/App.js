import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TripBoard from './pages/TripBoard';
import Dashboard from './pages/Dashboard';
import HighlightsPage from './pages/HighlightsPage';

import Navbar from './components/Navbar';
import AddTrip from './components/AddTrip';

import { useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const { currentUser } = useAuth();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtrip" element={<AddTrip />} />
          <Route path="/tripboard" element={<TripBoard />} />
          <Route path="/highlight" element={<HighlightsPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
