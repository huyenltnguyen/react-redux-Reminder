import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	onInputChange = (event) => {
		this.setState({ text: event.target.value });
		
	}

	addReminder = () => {
		this.props.addReminder(this.state.text);
	}

	render() {
		return (
			<div className="App">
				<div className="title">Reminder App</div>
				<div className="form-inline">
					<div className="form-group">
						<input
							className="form-control"
							placeholder="I have to..."
							onChange={ this.onInputChange } />
					</div>
					<div>
						<button
							type="button"
							className="btn btn-success"
							onClick={ this.addReminder }>
								Add Reminder
						</button>
					</div>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);