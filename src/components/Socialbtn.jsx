import React from "react";

export function Socialbtn({ type }) {
  return (
  	<li className=""><a href="#"><span className={`icon-${type}`}></span></a></li>   
  );
}
