import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class NewUser extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Register</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="email" type="email" placeholder="Email" />
            <Input ref='name' type='text' placeholder='Something' />
            <Input ref="password" type="password" placeholder="Password" />
            <ButtonInput onClick={this.createUser.bind(this)} bsStyle="primary" type="submit" value="Sign Up"/>
          </form>
        </Panel>
      </Col>
    )
  }

  createUser(e) {
    e.preventDefault();
    console.log(this.refs.name.getValue())
    const {create} = this.props;
    const {email, password} = this.refs;
    create(email.getValue(), password.getValue());
    email.getInputDOMNode().value = '';
    password.getInputDOMNode().value = '';
  }
}

export default NewUser;