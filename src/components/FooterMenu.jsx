import React from 'react';

const footerLinks = [ 
  {
    name: 'Shop',
    link: 'shop.html'
  },
  {
    name: 'About',
    link: 'about.html'
  },
  {
    name: 'Journal',
    link: 'journal.html'
  },
  {
    name: 'Contact Us',
    link: 'contact.html'
  }
];

export function FooterMenu(){ 
	return (
		<div className="ftco-footer-widget mb-4 ml-md-5">
	        <h2 className="ftco-heading-2">Menu</h2>
	        <ul className="list-unstyled">
	        	{footerLinks.map((footerLink, index) => (
	            	<li key={index}><a href="#" className="py-2 d-block">{footerLink.name}</a></li>
	            ))}
	        </ul>
	    </div>
	);
}