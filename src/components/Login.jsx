import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [password, setPassword] = useState('');
  const correctPassword = '12345';
  const [loginError, setLoginError] = useState(false);
  let nav = useNavigate()

  const handleLogin = () => {
    if (password === correctPassword) {
        nav('/controlpanel')
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
            <Form.Label>סיסמה</Form.Label>
            <Form.Control
              type="password"
              placeholder="הכנס סיסמה"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleLogin}
            className="btn-block btn-info mt-2" // Add margin-top here
          >
            כניסה
          </Button>
        </Form>
      </div>
    </Container>
  );
}
