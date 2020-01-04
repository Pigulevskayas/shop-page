import React from 'react';

export function Copyright(){ 
	return (
		<p>
           Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> 
        </p>
	);
}