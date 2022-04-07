import React from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ currentUser, children }) {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
