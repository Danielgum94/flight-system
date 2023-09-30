import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Controlpanel({ planeArr }) { // Accept planeArr as a prop

  const totalPassengers = planeArr.reduce((total, flight) => total + parseInt(flight.passengers, 10), 0);
  const totalFlights = planeArr.length;

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
        <Col xs={12} md={9}>
          <Row>
            {planeArr.map((flight) => ( // Use planeArr instead of flightsData
              <Col key={flight.id} xs={12} md={6}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Flight Number: {flight.id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Airline: {flight.flightCompany}
                    </Card.Subtitle>
                    <Card.Text>Passengers: {flight.passengers}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          <Row className="mt-4">
            <Col xs={12} className="text-center">
              <div className="bg-primary text-white p-3 rounded">
                Total Passengers: {totalPassengers}
              </div>
            </Col>
            <Col xs={12} className="text-center mt-4">
              <div className="bg-danger text-white p-3 rounded">
                Total Flights: {totalFlights}
              </div>
            </Col>
          </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
