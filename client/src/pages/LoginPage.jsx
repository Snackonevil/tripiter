import { useState, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  const { login, googleAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  // Handle Google authentication
  async function handleGoogleAuth(e) {
    e.preventDefault();
    try {
      setError('');
      const result = await googleAuth();
      const userEmail = result.user.email;
      // Query user in database
      // if found then:
      setCurrentUser(result.user);
      navigate('/dashboard');

      // else navigate to full signup form to create 'profile'
      // signout first?
      // create-profile page?
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  // To handle Login button click
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setError('');
      // Firebase auth in AuthContext
      const result = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      // if success, sets current user and navigates to dashboard
      setCurrentUser(result.user);
      navigate('/dashboard');
      console.log(result);
    } catch (err) {
      // switch/case for error message
      switch (err.code) {
        case 'auth/user-not-found':
          setError('User not found');
          break;
        case 'auth/wrong-password':
          setError('Invalid password');
        default:
          setError('');
      }
      // err.code = auth/user-not-found
      // err.code = auth/wrong-password
      console.log(err.code);
    }
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + `/login-background.png`
          })`,
          height: '100vh',
          width: '100vw',
          backgroundSize: 'cover',
          position: 'absolute',
          top: '0',
        }}
      ></div>
      <div className="login-page">
        <div className="banner-container">
          <h1 className="banner">Sign up to share your trips</h1>
        </div>
        <div className="login-container">
          <h1>Welcome to Tripiter</h1>
          <form>
            {error ? (
              <p
                style={{
                  color: 'red',
                  textAlign: 'center',
                  margin: '0',
                  padding: '0',
                }}
              >
                {error}
              </p>
            ) : (
              ''
            )}
            <div className="inputs">
              <div className="form-element">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  ref={emailRef}
                  type="text"
                  required
                />
              </div>
              <div className="form-element">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  ref={passwordRef}
                  type="password"
                  required
                />
              </div>
            </div>
            <button onClick={handleLogin}>Login</button>
            <h4>or</h4>
            <button
              onClick={handleGoogleAuth}
              style={{
                backgroundColor: 'transparent',
                width: '100%',
              }}
            >
              <GoogleButton
                label="Continue with Google"
                type="light"
                style={{
                  width: '100%',
                  borderRadius: '30px',
                  overflow: 'hidden',
                }}
              />
            </button>
          </form>
          <p>
            New here? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
