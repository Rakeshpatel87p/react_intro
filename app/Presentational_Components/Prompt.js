import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

function Prompt(props){
	return (
			<div>
    			<h1>{props.header}</h1>
    			<div>
	        		<form onSubmit={props.onSubmitUser}>
	            	<div className="formGroup">
	                	<input className="formControl" 
	                		onChange={props.onUpdateUser} 
	                		value={props.username} 
	                		placeholder="GitHub Username" type="text" />
	            	</div>
	            	<div className="formGroup">
	                	<button 
	                		className="Hey" 
	                		type="submit">
	                    	Continue
	                	</button>
	            	</div>
	        		</form>
	    		</div>
			</div>
		)
}


Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

export default Prompt;
