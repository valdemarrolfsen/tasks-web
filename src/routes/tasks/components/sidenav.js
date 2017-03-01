import React, {Component} from 'react';
import {connect} from 'react-redux'
import { IndexLink, Link } from 'react-router';

class Sidebar extends Component {

  render() {
    return (
      <nav className="nav-side nav-side-dark nav-side-lg nav-left">
        <div className="nav-item">
          <span className="fa fa-globe"/>
          <span className="item-text">My trips</span>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Sidebar);