import React from 'react';

export function TaskNavbar(props){	
    return (
    	<div className="navbar">
    		{props.items.map((item, index) => (
    			<a key={index} href="#" className={props.firstActive === item ? "active" : "" } >{item}</a>
            ))}
    	</div>
    );
}