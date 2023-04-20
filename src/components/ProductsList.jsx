import React from "react";
import { ProductCard } from "./ProductCard";

export function ProductsList() {
	const products = [
	  {
	    id: 1,
	    percent: "30",
	    title: "Bell Pepper",
	    sale: "120.00",
	    price: "80.00"
	  },
	  {
	    id: 2,
	    title: "Strawberry",
	    sale: "120.00"
	  },
	  {
	    id: 3,
	    title: "Green Beans",
	    sale: "120.00"
	  },
	  {
	    id: 4,
	    title: "Purple Cabbage",
	    sale: "120.00"
	  },
	  {
	    id: 5,
	    percent: "30",
	    title: "Tomatoe",
	    sale: "120.00",
	    price: "80.00"
	  },
	  {
	    id: 6,
	    title: "Brocolli",
	    sale: "120.00"
	  },
	  {
	    id: 7,
	    title: "Carrots",
	    sale: "120.00"
	  },
	  {
	    id: 8,
	    title: "Fruit Juice",
	    sale: "120.00",
	  },
	  {
	    id: 9,
	    percent: "30",
	    title: "Onion",
	    sale: "120.00",
	    price: "80.00"
	  },
	  {
	    id: 10,
	    title: "Apple",
	    sale: "120.00"
	  },
	  {
	    id: 11,
	    title: "Garlic",
	    sale: "120.00"
	  },
	  {
	    id: 12,
	    title: "Chilli",
	    sale: "120.00"
	  }
	];

    return (
    	products.map((product, index) => (
	      <ProductCard
	        key={index}
	        id={product.id}
	        title={product.title}
	        price={product.price}
	        sale={product.sale}
	        percent={product.percent}
	      />
	    ))
  	);
}
