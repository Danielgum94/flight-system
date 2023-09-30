import React, { useState } from 'react';
import { Container,Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const correctPassword = '12345';
  const [loginError, setLoginError] = useState(false);
  const nav = useNavigate();

  const handleLogin = () => {
    if (password === correctPassword) {
      nav('/controlpanel');
    } else {
      setLoginError(true);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-4 border rounded">
        <h2>כניסה למערכת</h2>
        {loginError && (
          <Alert variant="danger" onClose={() => setLoginError(false)} dismissible>
            סיסמה שגויה. אנא נסה שוב.
          </Alert>
        )}
        <Form>
          <Form.Group>
            <Form.Label>
              סיסמה
              <span
                id="passwordTooltip"
                data-toggle="tooltip"
                title="סיסמה: 12345"
              >
                <i className="fas fa-question-circle"></i>
              </span>
              <p>The Password is 12345</p>
            </Form.Label>
            <div className="password-input">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="הכנס סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <div
                className="show-password-icon"
                onClick={() => setShowPassword(!showPassword)}
                onMouseEnter={() => setShowPassword(true)}
                onMouseLeave={() => setShowPassword(false)}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </div>
            </div>
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleLogin}
            className="btn-block btn-info mt-2"
          >
            כניסה
          </Button>
        </Form>
      </div>
    </Container>
  );
}
