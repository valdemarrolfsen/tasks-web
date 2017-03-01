import React, {Component, PropTypes} from 'react'
import Header from '../components/header/header';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

// Custom
import {ActionCreators} from '../redux/actionCreators';

import './coreLayout.scss';

class CoreLayout extends Component {

  static propTypes = {
    children : PropTypes.element.isRequired
  };

  componentDidMount() {
    //this.props.refreshToken();
  };

  render() {
    return (
      <div>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);