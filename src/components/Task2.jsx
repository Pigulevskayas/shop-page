import React from 'react';
import './task.css';
import { TaskNavbar } from './components/TaskNavbar';

export class Task2 extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      activeLink: props.firstActive || '',
	    };
	}

	function changeFunction(e) {
	    e.preventDefault();
	    console.log('clicked');
	}

	render() {
	    return (
	      <div id="task-wraper">
	        <TaskNavbar items={["Home", "Search", "About", "Contact"]} firstActive="Home" navFunction={this.changeFunction} />
	      </div>
	    );
	}
}


