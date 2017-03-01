import React, {Component, PropTypes} from 'react';
import { IndexLink, Link } from 'react-router';
import {connect} from 'react-redux'

import logo from '../../resources/img/trackr-logo.png'

import './header.scss';

class Header extends Component {

  render() {

    let links = [
      {name: 'Home', path: '/'},
      {name: 'Trips', path: '/trips'},
    ];

    if (this.props.isAuth) {
      links.push({name: 'Sign out', path: '/logout'});
    } else {
      links.push({name: 'Sign in', path: '/login'});
    }

    links = links.map((link, i) => {
      return <li key={i}><Link to={link.path} activeClassName='active'>{link.name}</Link></li>;
    });

    return (
      <nav className="header nav nav-md nav-fixed nav-end nav-center-v nav-primary">
        <Link to='/' className="nav-logo">
          <img src={logo} alt=""/>
        </Link>

        <ul className="fs-14">
          {links}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuth:state.isAuthenticated
  }
}

export default connect(mapStateToProps)(Header);