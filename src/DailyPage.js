import React, { Component } from 'react';
import DailyBigThree from './DailyBigThree';
import DailyOtherTasks from './DailyOtherTasks';

class DailyPage extends Component {
	render() {
		return (
			<div>
				<DailyBigThree />
				<DailyOtherTasks />
			</div>
		);
	}
}

export default DailyPage;
