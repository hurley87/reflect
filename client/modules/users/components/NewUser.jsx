import React from 'react';
import { Col, Row, Input, ButtonInput, Panel, Glyphicon } from 'react-bootstrap';

const NewUser = ({conent}) => (
  <Row>
    <Col xs={12} sm={6} smOffset={3}>
      <Panel>
        <h1>Register</h1>
        <form>
          <Input type='email' placeholder='Email'/>
          <Input type='password' placeholder='Password'/>
          <ButtonInput bsStyle='primary' type='submit' value='New User'></ButtonInput>
        </form>
      </Panel>
    </Col>
  </Row>
);

export default NewUser;
