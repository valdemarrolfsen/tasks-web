import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'

// Components
import InputField from './components/input/input';
import Button from '../button/button';

import './form.scss';

class Form extends Component {

  static defaultProps = {
    fields: [],
    submitText:'Submit',
    theme: 'material'
  };

  bla() {

  }

  render() {

    let {fields, theme} = this.props;

    fields = fields.map((field, i) => {
      return (
        <div className="p-2-0">
          <InputField
            type={field.type}
            value={field.value}
            name={field.name}
            id={field.id}
            required={field.required}
          />
        </div>
        )
    });

    return (
      <form className={theme} onSubmit={() => {this.bla()}}>

        {fields}

        <Button classNames={'btn-lg btn-border-light w-100-p rounded-3 fs-12'}
                loading={false}
                type={'submit'}
                text={'Sign in'} />

      </form>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Form);