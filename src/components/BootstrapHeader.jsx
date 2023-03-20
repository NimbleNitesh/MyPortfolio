import React from "react";
import Typed from 'typed.js';
import CV from "./Nitesh_Resume.pdf";

export default function BootstrapHeader() {
   // Create reference to store the DOM element containing the animation
   const el = React.useRef(null);
   // Create reference to store the Typed instance itself
   const typed = React.useRef(null);
   React.useEffect(() => {
     const options = {
       strings: [
         'Competitive Programmer',
         'Web Developer',
         'ML Enthusiast'
       ],
       typeSpeed: 50,
       backSpeed: 50,
       loop: true
     };
     
     // elRef refers to the <span> rendered below
     typed.current = new Typed(el.current, options);
     
     return () => {
       // Make sure to destroy Typed instance during cleanup
       // to prevent memory leaks
       typed.current.destroy();
     }
   }, [])
 
  return (
    <>
     <div className="header-wrapper">
    <div className="mainInfo">
      <h1>Hi, my name is</h1>
      <h2>Nitesh Srivastava</h2>
      <h3>I'm a      
      <div className="type-text">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      </h3>
      <p>I am a highly motivated and ambitious person, always ready to try out new things. I am highly passionate about Competitive Programming and have been pursuing the sport for about 1.5 years. I am actively looking for summer internships in software engineering domain. </p>
      <a href={CV} download className="CTA">Download CV </a>
    </div>
    </div></>
  )
}
