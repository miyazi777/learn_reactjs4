import React from 'react';
import ReactDOM from 'react-dom';

var Todo = React.createClass({

  getInitialState: function() {
    return {
			tasks: this.props.tasks,
			newTask: ''
    };
  },

	_textChange(e) {
		this.setState({newTask: e.target.value});
	},

	// タスクの追加処理
	_addTask: function() {
		tasks = this.state.tasks
    tasks.push(this.state.newTask);
		this.setState({
			newTask: '',
			tasks: tasks,
		});
	},

	// 表示処理
	render: function() {
		return (
      <div>
			  <div>
			    {
            this.state.tasks.map(function(task) {
			    		return <div>{task}</div>;
			    	})
			    }
			  </div>
			  <div>
			    <input type="text" onChange={this._textChange} value={this.state.newTask}/>
				  <button type="button" onClick={this._addTask}>add task</button>
			  </div>
			</div>
		);
	},

});


var tasks = ['task1', 'task2', 'task3'];

ReactDOM.render(
    <Todo tasks={tasks} />,
    document.getElementById('app')
);
