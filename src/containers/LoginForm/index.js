import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '~/src/actions/Login';
// import 'w3css/w3.css';
// import './style.scss';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {loginState, login, title} = this.props;

    return (
      <div id="login-form">
        <div className="w3-card">
          {
            loginState.isFetching ? (
              <p className="w3-center w3-text-teal w3-xxlarge">Processing...</p>
            ) : (
              <div>
                <p className="w3-center w3-text-teal w3-xxlarge">{title}</p>
                <form className="w3-container">
                  <input className="w3-input"
                         type="email"
                         value={this.state.email}
                         onChange={(event) => this.setState({email: event.target.value})}
                         placeholder="user@example.com"/>
                  <input className="w3-input"
                         type="password"
                         value={this.state.password}
                         onChange={(event) => this.setState({password: event.target.value})}
                         placeholder="password"/>
                </form>
                {
                  loginState.error &&
                  <div className="w3-panel w3-text-red">
                    <p className="w3-large">{loginState.error.message}</p>
                  </div>
                }
                <div className="w3-center">
                  <button className="w3-button w3-block w3-teal"
                          onClick={() => {
                            login(this.state.email, this.state.password);
                            this.setState({password: ''});
                          }}>Login
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);