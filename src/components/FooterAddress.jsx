import React from 'react';

export function FooterAddress(){ 
	return (
		<React.Fragment>
			<h2 className="ftco-heading-2">Have a Questions?</h2>
			<div className="block-23 mb-3">
				<ul>
					<li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
					<li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
					<li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
				</ul>
			</div>
		</React.Fragment>
	);
}