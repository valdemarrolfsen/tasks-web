import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'


import './button.scss';

class Button extends Component {

  static defaultProps = {
    loading: true,
    text: 'Button',
    type: 'button',
    leftIcon: '',
    rightIcon: '',
    classNames:'btn-md'
  };

  render() {

    const {loading, text, type, leftIcon, rightIcon, classNames} = this.props;

    let content = (loading) ? (
      <div className="spinner"></div>
    ) : (
      <span>
        <span className={'button-icon left fa fa-' + leftIcon} />
        <span>{text}</span>
        <span className={'button-icon right fa fa-' + rightIcon} />
      </span>
    );

    return (
      <button type={type} className={classNames}>
        {content}
      </button>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Button);