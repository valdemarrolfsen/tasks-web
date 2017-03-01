import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../../redux/actionCreators';

import './card.scss';

class Card extends Component {

  static propTypes = {
    task: PropTypes.object,

    // Functions
    updateTask:PropTypes.func,
    deleteTask:PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  deleteTask(e) {
    this.props.deleteTask(this.props.task).then(resp => {
      console.log("Deleted!");
    })
  }

  toggleCompleted() {
    this.props.task.completed = !this.props.task.completed;

    this.props.updateTask(this.props.task).then(resp => {
      console.log("Updated!");
    })
  }

  render() {

    const { task } = this.props;

    return (
      <div className="card row row-center-v bg-light hover-light m-1-0 p-2-1 rounded-3">
        <div onClick={() => {this.toggleCompleted()}} className="c-s-2 t-center check">
        <span className={(this.props.task.completed) ? 'color-accept' : 'color-stable'}>
          <span className="fa fa-check fs-20" />
        </span>
        </div>
        <div className="c-s-8">
          <h5>{task.name}</h5>
        </div>
        <div onClick={(e) => {this.deleteTask(e)}} className="c-s-2 t-center trash">
          <span className="fa fa-trash-o color-decline fs-16" />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);