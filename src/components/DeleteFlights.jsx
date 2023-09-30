import React, { useState } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DeleteFlights(props) {
  const [id, setId] = useState('');

  const deleteFlight = () => {
    if (id.length > 5 || id.length === 0) {
      alert('Invalid flight number');
    } else {
      props.delete(id); // Call the deleteFunction prop with the flight ID
      setId('');
    }
  }


  return (
  <Container className='mt-4'>
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
        <Col xs={12} md={{span: 6, offset: 3}}>
            <Card>
              <Card.Header className='text-center'>Delete Flight</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Flight NUmber</Form.Label>
                    <Form.Control 
                      type='text'
                      placeholder='Enter Flight number'
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </Form.Group>
                  <div className="text-center">
                  <Button variant="primary" className='m-1' onClick={deleteFlight}>
                    Delete Flight
                  </Button>
                </div>
                </Form>
              </Card.Body>
            </Card>
        </Col>
    </Row>
  </Container>
  )
}
