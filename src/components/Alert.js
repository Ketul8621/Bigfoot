import React from 'react'

function Alert(props) {
	const capitalize = (word) => {
		let text = word.toLowerCase();
		return text.charAt(0).toUpperCase() + word.slice(1);
	}
	return (
		props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
			{capitalize(props.alert.type)}: {props.alert.message}
		</div>
	)
}

export default Alert
