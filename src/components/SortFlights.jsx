import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SortFlights({ planeArr }) {
  const [sortedFlights, setSortedFlights] = useState([...planeArr]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setSortedFlights([...planeArr]);
  }, [planeArr]);

  const handleSort = () => {
    let sorted = [...sortedFlights];

    if (sortBy === 'airlineName') {
      sorted = sorted.sort((a, b) =>
        sortOrder === 'asc'
          ? a.flightCompany.localeCompare(b.flightCompany)
          : b.flightCompany.localeCompare(a.flightCompany)
      );
    } else if (sortBy === 'passengers') {
      sorted = sorted.sort((a, b) =>
        sortOrder === 'asc' ? a.passengers - b.passengers : b.passengers - a.passengers
      );
    }

    setSortedFlights(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilter = (e) => {
    const filterText = e.target.value.toLowerCase();
    const filteredFlights = planeArr.filter((flight) =>
      flight.flightCompany.toLowerCase().startsWith(filterText)
    );
    setSortedFlights(filteredFlights);
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
        <Col xs={12} md={9}>
          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group>
                <Form.Label>Filter by Airline Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter starting letter"
                  onChange={handleFilter}
                />
              </Form.Group>
            </Col>
            <Col xs={6} className="d-flex align-items-end">
              <Form.Group className="flex-grow-1">
                <Form.Label>Sort by Passengers</Form.Label>
                <Form.Control
                  as="select"
                  className="d-flex"
                  onChange={(e) => setSortBy('passengers')}
                >
                  <option value="">Select</option>
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" style={{ marginLeft: '10px' }} onClick={handleSort}>
                Sort
              </Button>
            </Col>
          </Row>
          <Row>
            {sortedFlights.map((flight) => (
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
