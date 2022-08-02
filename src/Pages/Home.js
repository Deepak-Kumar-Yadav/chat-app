import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import { RoomsProvider } from '../Context/Rooms.context';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          <Col className="h-100" xs={24} md={8}>
            <Sidebar />
          </Col>
        </Row>
      </Grid>
    </RoomsProvider>
  );
}
