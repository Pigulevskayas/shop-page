import React from 'react';
import { FooterText } from './FooterText';
import { FooterMenu } from './FooterMenu';
import { FooterHelp }  from './FooterHelp';
import { FooterAddress } from './FooterAddress';
import { Copyright } from './Copyright';
import { ScrollTopBtn } from './ScrollTopBtn';

export function Footer() {
  return (

      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <ScrollTopBtn />
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <FooterText />
            </div>
            <div className="col-md">
              <FooterMenu />
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <FooterHelp />
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <FooterAddress />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <Copyright />
            </div>
          </div>
        </div>
      </footer>
             
      
  );
}
