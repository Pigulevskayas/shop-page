import React from "react";
import { Socialbtn } from "./Socialbtn";

export function SocialBar() {
  return (
  	<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
  		<Socialbtn type="twitter" />
  		<Socialbtn type="facebook" />
  		<Socialbtn type="instagram" />
    </ul> 
  );
}
