import React from 'react';
import { TopBar } from './components/TopBar';
import { MainMenu } from './components/MainMenu';
import { Jumbotron } from './components/Jumbotron';
import { ProductSection } from './components/ProductSection';
import { SubscribeForm } from './components/SubscribeForm';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

//import logo from './logo.svg';
// import './App.css';
// import './css/open-iconic-bootstrap.min.css'
// import './css/animate.css'
//import './css/owl.carousel.min.css'
//import './css/owl.theme.default.min.css'
//import './css/magnific-popup.css">'
// import './css/aos.css'
// import './css/ionicons.min.css'
// import './css/bootstrap-datepicker.css'
// import './css/jquery.timepicker.css'
// import './css/flaticon.css'
// import './css/icomoon.css'
// import './css/style.css'

// import './js/jquery.min.js'
// import './js/jquery-migrate-3.0.1.min.js'
// import './js/popper.min.js'
// import './js/bootstrap.min.js'
// import './js/jquery.easing.1.3.js'
// import './js/jquery.waypoints.min.js'
// import './js/jquery.stellar.min.js'
// import './js/owl.carousel.min.js'
// import './js/jquery.magnific-popup.min.js'
// import './js/aos.js'
// import './js/animateNumber.min.js'
// import './js/bootstrap-datepicker.js'
// import './js/main.js'

export function Shop() {
  return (
    <div>
      <TopBar />
      <MainMenu />
      <Jumbotron />
      <ProductSection />
      <SubscribeForm />
      <Footer />
      <Loader />       
    </div>
  );
}

