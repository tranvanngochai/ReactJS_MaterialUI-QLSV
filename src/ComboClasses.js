import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class ComboClasses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ year: 2020, name: 'AT1' },
				{ year: 2021, name: 'AT2' },
				{ year: 2022, name: 'AT3' },
			],
			selectedClass: '',
		};
	}

	handleChange = (event, value) => {
		this.setState({
			selectedClass: value?.name
		});
		this.props.handleChange(value?.name);
	};

	render() {
		return (
			<div style={{ minWidth: 200 }}>
				<Autocomplete
					id='combo-box-lop'
					size='small'
					options={this.state.data}
					getOptionLabel={(option) => option.name}
					onChange={this.handleChange}
					style={{
						background: 'white',
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							label=''
							variant='outlined'
							placeholder='Chọn lớp'
						/>
					)}
				/>
			</div>
		);
	}
}

export default ComboClasses;
