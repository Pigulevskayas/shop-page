import React from "react";

export function CardLink({ classType, type }) {
  return (
  	<a href="#" className={`${classType} d-flex justify-content-center align-items-center`}>
		<span><i className={`ion-ios-${type}`}></i></span>
	</a>  
  );
}
