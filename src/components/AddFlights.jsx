import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function AddFlights(props) {
  const [id, setId] = useState('');
  const [flightCompany, setFlightCompany] = useState('');
  const [passengers, setPassengers] = useState(0);
  const nav = useNavigate();

  const addNewFlight = () => {
    if (id.length > 5 || id.length === 0) {
      alert('Invalid flight number');
    } else if (flightCompany.trim() === '') {
      alert('Please enter airline name');
    } else if (passengers < 1 || passengers > 450) {
      alert('Passenger count must be between 1 and 450');
    } else {
      props.add(id, flightCompany, passengers);
      setId('');
      setFlightCompany('');
      setPassengers(0);
      nav('/controlpanel');
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={3} className="mr-md-3">
          <div className="d-flex flex-column">
            <Link to="/controlpanel/">
              <Button variant="success" className="mb-2 m-1 btn-block w-100">
                All Flights
              </Button>
            </Link>
            <Link to="/controlpanel/sort/">
              <Button variant="success" className="mb-2 m-1 btn-block w-100">
                Sort Flights
              </Button>
            </Link>
            <Link to="/controlpanel/add">
              <Button variant="success" className="mb-2 m-1 btn-block w-100">
                Add Flight
              </Button>
            </Link>
            <Link to="/controlpanel/delete">
              <Button variant="success" className="mb-2 m-1 btn-block w-100">
                Delete Flight
              </Button>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header className="text-center">Add a New Flight</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Flight Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter flight number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Airline Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter airline name"
                    value={flightCompany}
                    onChange={(e) => setFlightCompany(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Passengers</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter passenger count"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" className='m-1' onClick={addNewFlight}>
                    Add Flight
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
