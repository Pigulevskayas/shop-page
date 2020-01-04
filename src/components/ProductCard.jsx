import React from "react";
import { CardLink } from "./CardLink";

export function ProductCard({ id, percent, title, price, sale }) {
    return (
	  	<div className="col-md-6 col-lg-3">
		  	<div className="product">
			  	<a href="#" className="img-prod"><img className="img-fluid" src={`../images/product-${id}.jpg`} alt="Colorlib Template" />
				  	{ percent && (
				  		<span className="status">{percent}%</span>
				  	)}
				  	<div className="overlay"></div>
			  	</a>
			  	<div className="text py-3 pb-4 px-3 text-center">
				  	<h3><a href="#">{title}</a></h3>
				  	<div className="d-flex">
					  	<div className="pricing">
					  		<p className="price">
					  			{ price && (
					  				<span className="mr-2 price-dc">${price}</span>
					  			)}
					  			<span className="price-sale">${sale}</span>
					  		</p>
					  	</div>
					</div>
					<div className="bottom-area d-flex px-3">
					  	<div className="m-auto d-flex">
						  	<CardLink type="menu" classType="add-to-cart" />
						  	<CardLink type="cart" classType="buy-now" />
						  	<CardLink type="heart" classType="heart" />
					  	</div>
				  	</div>
			  	</div>
		  	</div>
	  	</div>
  	);
}
