import React from 'react'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import "../App.css";
import "../components/NavbarStyles.css"





export default function BootstrapNavbar() {
  return (
	
	<div className="container"  >
	<div className=" navbar navbar-expand-md navbar-light ">
<div className="container">
	<a className="navbar-brand" href="/"><img className="logo" src={logo} alt="log .." /></a>
	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		{/*<span className="navbar-toggler-icon"></span>*/}
	<FaBars size={25} style={{color: "#64ffda"}} />
	</button>

	<div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav ms-auto">
			<li className="nav-item active">
			<a className="nav-link" href="/">Home <span className="sr-only"></span></a>
			</li>
			<li className="nav-item">
			<a className="nav-link" href="/project">Project</a>
			</li>
			<li className="nav-item">
			<a className="nav-link" href="/about">About</a>
			</li>
			<li className="nav-item">
			<a className="nav-link" href="/contact">Contact</a>
			</li>
		</ul>
	</div>
</div>
</div>
</div>

  )
}
