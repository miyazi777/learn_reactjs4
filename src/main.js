import React from 'react';
import ReactDOM from 'react-dom';

// タスクコンポーネント
class Task extends React.Component {
	constructor() {
		super();
		this.doneTask = this.doneTask.bind(this);
		this.state = {
			done: false,
		};
	}

	doneTask() {
		this.setState({done: true});
	}

  render() {
		var displayName = "";
		if (this.state.done) {
			displayName = "(done)";
		}
		return (
			<div>
			  <span>{displayName}{this.props.name}</span>
				<button onClick={this.doneTask}>done</button>
			</div>
		);
	}
}

// タスクリストコンポーネント
class TaskList extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div>{
          this.props.tasks.map(function(task, idx) {
						return (
								<Task name={task} />
								);
					  })
				}</div>
				);
	}
}




var tasks = ['task1', 'task2', 'task3'];
var task = "task1";

ReactDOM.render(
		<div>
			<TaskList tasks={tasks}/>
		</div>,
    document.getElementById('app')
);
