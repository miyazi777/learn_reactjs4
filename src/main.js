import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({

  getInitialState: function() {
    return {
			tasks: this.props.tasks,
    };
  },

	render: function() {
		return (
      <div>{
        this.state.tasks.map(function(task) {
					return <div>{task}</div>;
				})
			}</div>
		);
	},

});

var tasks = ['task1', 'task2', 'task3'];

ReactDOM.render(
    <Hello tasks={tasks} />,
    document.getElementById('app')
);
