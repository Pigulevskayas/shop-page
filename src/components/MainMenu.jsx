import React from 'react';

const menuLinks = [ 
  {
    name: 'Home',
    link: 'index.html'
  },
  {
    name: 'Shop',
    link: 'shop.html',
    dropdown: [
      {
        name: 'Shop',
        link: 'shop.html'
      },
      {
        name: 'Wishlist',
        link: 'wishlist.html'
      },
      {
        name: 'Single Product',
        link: 'product-single.html'
      },
      {
        name: 'Cart',
        link: 'cart.html'
      },
      {
        name: 'Checkout',
        link: 'checkout.html'
      }
    ]
  },
  {
    name: 'About',
    link: 'about.html'
  },
  {
    name: 'Blog',
    link: 'blog.html'
  },
  {
    name: 'Contact',
    link: 'contact.html'
  }
];

export function MainMenu(){	
    return (
    	<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Vegefoods</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              {menuLinks.map((menuLink, index) => (
                <li className={menuLink.dropdown ? 'nav-item active dropdown' : 'nav-item'} key={index}>
                  <a href={menuLink.link} className={menuLink.dropdown ? 'nav-link dropdown-toggle':'nav-link'} id={menuLink.dropdown ? `dropdown0${index}` : ''} data-toggle={menuLink.dropdown ? 'dropdown' : ''} aria-haspopup={menuLink.dropdown ? 'true' : ''} aria-expanded={menuLink.dropdown ? 'false' : ''}>
                    {menuLink.name}
                  </a>
                  {menuLink.dropdown && (
                    <div className="dropdown-menu" aria-labelledby={`dropdown0${index}`}>
                      {menuLink.dropdown.map((menuLinkDrop, index) => (
                        <a key={index} className="dropdown-item" href={menuLinkDrop.link}>{menuLinkDrop.name}</a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              
              <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>[0]</a></li>

            </ul>
          </div>
        </div>
      </nav>
    );
}
