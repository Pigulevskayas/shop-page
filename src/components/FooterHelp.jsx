import React from 'react';

const helpLinks = [ 
  {
    name: 'Shipping Information',
    link: 'shop.html'
  },
  {
    name: 'Returns & Exchange',
    link: 'about.html'
  },
  {
    name: 'Terms & Conditions',
    link: 'about.html'
  },
  {
    name: 'Privacy Policy',
    link: 'about.html'
  },
  {
    name: 'Contact',
    link: 'contacts.html'
  },
  {
    name: 'FAQs',
    link: 'faq.html'
  }
];

export function FooterHelp(){ 
	return (
		<React.Fragment>
			<h2 className="ftco-heading-2">Help</h2>
			<div className="d-flex">
				<ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
					{helpLinks.map((helpLink, index) => (
						index < 4 && 
							<li key={index}><a href="#" className="py-2 d-block">{helpLink.name}</a></li>		
			        ))}
				</ul>
				<ul className="list-unstyled">
					{helpLinks.map((helpLink, index) => (
						index >= 4 &&
							<li key={index}><a href="#" className="py-2 d-block">{helpLink.name}</a></li>	
			        ))}
				</ul>
			</div>
		</React.Fragment>
	);
}