import React, {Component} from 'react'

import {TextField} from 'material-ui'

import './auth-login.component.scss'

export class AuthLoginComponent extends Component {
  static path = '/auth/login'

  constructor(props) {
    super(props)

    this.state = { login: '', password: '' }
    this.enableFinger = this.props.enableFinger
    this.disableFinger = this.props.disableFinger
    this.updateLoginData = this.props.updateLoginData
  }

  render() {
    return(
      <div className="auth-login-component">
        <TextField
          value={this.state.login}
          hintText="Login"
          onChange={this.onChangeLoginHandler.bind(this)}
        />
        <TextField
          type="password"
          value={this.state.password}
          hintText="Password"
          onChange={this.onChangePasswordHandler.bind(this)}
        />
      </div>
    )

  }

  checkToEnableSubmitFinger() {
    if ((this.state.login.length > 0) && (this.state.password.length > 0)) {
      this.enableFinger()
      this.updateLoginData({
        login: this.state.login,
        password: this.state.password,
      })
    } else {
      this.disableFinger()
      this.updateLoginData({
        login: this.state.login,
        password: this.state.password,
      })
    }
  }

  onChangeLoginHandler = (event) => {
    this.setState({ ...this.state, login: event.target.value }, () => {
      this.checkToEnableSubmitFinger()
    })
  }

  onChangePasswordHandler = (event) => {
    this.setState({ ...this.state, password: event.target.value }, () => {
      this.checkToEnableSubmitFinger()
    })
  }

  onClickSignInHandler() {
    this.props.authActions.login(this.state)
  }

  onClickCancelHandler() {
    this.props.authActions.routeToAuth()
  }
}