import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

// Custom
import {ActionCreators} from '../../redux/actionCreators';
import Button from '../../components/button/button';

// Resources
import logo from '../../resources/img/logo.png';

import './login.scss';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  doLogin(e) {

    // Needs to prevent default behaviour
    e.preventDefault();

    return this.props.loginUser(this.state.username, this.state.password).then(() => {
      browserHistory.push('/tasks');
      console.log('Logged in!');
    });
  }

  render() {
    return (
      <div className="login-container bg-primary row row-center row-center-v p-2-2">

        <form className="cover-content w-400" onSubmit={(e) => {this.doLogin(e)}}>

          <div className="row row-center">
            <div className="w-200">
              <img className="w-100-p" src={logo} alt="Task logo"/>
            </div>
          </div>

          <div className="p-2-0">
            <div className="material-input">

              <input type="text"
                     name="username"
                     id="username"
                     value = {this.state.username}
                     onChange = {(e) => {this.setState({username: e.target.value})}}
                     required />

              <label htmlFor="username">Username</label>
              <span/>
            </div>
          </div>

          <div className="p-2-0">
            <div className="material-input">

              <input type="password"
                     name="password"
                     id="password"
                     value = {this.state.password}
                     onChange = {(e) => {this.setState({password: e.target.value})}}
                     required />

              <label htmlFor="password">Password</label>
              <span/>
            </div>
          </div>

          <div className="p-2-0">
            <Button classNames={'btn-lg btn-border-light w-100-p rounded-3 fs-12'}
                    loading={false}
                    type={'submit'}
                    rightIcon={'sign-in'}
                    text={'Sign in'} />
          </div>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
