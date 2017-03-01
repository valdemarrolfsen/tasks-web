import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

class InputField extends Component {

  static defaultProps = {
    type: 'text',
    value: null,
    name: 'input',
    id: 'input',
    required: false
  };

  render() {

    const {type, value, name, id, required} = this.props;

    return (
      <div className="form-field">
        <input type={type}
               name={name}
               id={id}
               value = {value}
               onChange = {(e) => {this.setState({value: e.target.value})}}
               required={required} />

        <label htmlFor="password">Password</label>
        <span/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(InputField);