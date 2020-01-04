import React from 'react';
import { ProductCategories } from './ProductCategories';
import { ProductsList } from './ProductsList';
import { Paginator } from './Paginator';

export function ProductSection(){	
    return (
    	<section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
             <ProductCategories />
            </div>
          </div>
          <div className="row">
            <ProductsList />
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <Paginator />
            </div>
          </div>
        </div>
      </section>
    );
}