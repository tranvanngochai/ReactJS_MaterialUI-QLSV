import React from 'react';
import MyAppBar from './MyAppBar';
import MyClass from './MyClass';
import moment from 'moment';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedClass: '',
			addStudent: false,
			totalStudents: 0,
		};
	}

	handleClassChange = (selectedClass) => {
		this.setState({
			selectedClass: selectedClass,
			newStudent: null,
			className: this.state.selectedClass,
		});
	};

	handleAddStudent = () => {
		this.addNewStudent();
	};

	handleTotalStudents = (totalStudents) => {
		this.setState({ totalStudents: totalStudents, newStudent: null });
	};

	addNewStudent = () => {
		fetch('https://randomuser.me/api/?results=1')
			.then((res) => res.json())
			.then(
				(data) => {
					let id = 1;
					const dataWithId = data.results.map((record) => {
						return {
							id: id++,
							firstName: record.name.first,
							lastName: record.name.last,
							country: record.location.country,
							phone: record.phone,
							dob: moment(record.dob.date).format('DD/MM/YYYY'),
							picture: record.picture.thumbnail,
						};
					});
					this.setState({
						newStudent: dataWithId[0],
						className: this.state.selectedClass,
					});
				},
				(error) => {
					console.log('error', error);
				}
			);
	};

	render() {
		return (
			<div>
				<MyAppBar
					handleSelectClassChange={this.handleClassChange}
					handleAddStudent={this.handleAddStudent}
					totalStudents={this.state.totalStudents}
				/>
				<br />
				<MyClass
					newStudent={this.state.newStudent}
					className={this.state.selectedClass}
					handleTotalStudents={this.handleTotalStudents}
				/>
			</div>
		);
	}
}

export default App;
