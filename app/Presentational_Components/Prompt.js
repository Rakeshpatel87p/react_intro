import React from 'react';
import ReactDOM from 'react-dom';

const Prompt = React.createClass({
	render(){
		return (
			<div>
    			<h1>{this.props.header}</h1>
    		<div>
        	<form onSubmit={this.props.onSubmitUser}>
            <div className="formGroup">
                <input className="formControl" 
                	onChange={this.props.onUpdateUser} 
                	value={this.props.username} 
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
</div>)
	}
})

export default Prompt;
