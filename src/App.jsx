import React, { Component } from 'react';
import { Container, Row, Col } from '@cathodevel/style-guide';
import SocialButton from './SocialButton';

class App extends Component {
  handleSocialLogin = (user) => {
    console.log(user)
  }

  handleSocialLoginFailure = (err) => {
    console.error(err)
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col
              style={{
                textAlign: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
              }}
            >
              <SocialButton
                provider='facebook'
                appId='225171251608006'
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure}
              >
                Login with Facebook
              </SocialButton>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
