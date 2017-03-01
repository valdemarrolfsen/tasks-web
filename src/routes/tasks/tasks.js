import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {ActionCreators} from '../../redux/actionCreators';

// Components
import Card from './components/card';

import './tasks.scss';
import '../login/login.scss';

class Tasks extends Component {

  static propTypes = {
    listTasks:PropTypes.func,
    postTask:PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };

    this.props.listTasks();
  }

  addTask(e) {

    // Needs to prevent default behaviour
    e.preventDefault();

    this.props.postTask(this.state.task).then(resp => {

      // Empty state
      this.setState({task:''});
    });

  }

  render() {

    let tasks = this.props.tasks.map((task, i) => {
      return <Card key={i} task={task} />;
    });

    if (!tasks.length) {
      tasks.push(
        <div className="p-2-0 t-center">
          <h4>No tasks available</h4>
          <p>Create a task using the input field above! Its easy :)</p>
        </div>)
    }

    return (
      <div className="h-100-p">
        <div className="h-full bg-primary">
          <div className="row row-center p-2-2">
            <div className="w-600">

              <div className="p-3-0">
                <h3>Your tasks:</h3>
              </div>

              <form onSubmit={(e) => {this.addTask(e)}} className="material-input">

                <input type="text"
                       name="username"
                       id="username"
                       value = {this.state.task}
                       onChange = {(e) => {this.setState({task: e.target.value})}}
                       required />

                <label htmlFor="username">Add a new task</label>
                <span/>
              </form>

              {tasks}



            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
