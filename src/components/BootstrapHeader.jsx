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
         'Software Developer',
         'Computer Vision Engineer'
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
      <p>I'm Nitesh, a passionate web developer with a strong foundation in data structures, algorithms, and modern frameworks. I excel in creating scalable web applications. My experience includes full-stack development and extensive involvement in solving real-world problems. I'm also an enthusiastic competitive programmer, holding impressive ranks in coding competitions.</p>
      <p>I'm committed to delivering impactful end-to-end solutions and keen to explore new opportunities in <b>software development/computer vision/quantitative finance</b> to contribute to both technical innovation and social sustainability.</p>
      <a href={CV} download className="CTA">Download CV </a>
    </div>
    </div></>
  )
}
