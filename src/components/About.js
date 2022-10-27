import React, { useState } from "react";

 const About = () => {

 const [myStyle, setMyStyle] =useState ({
    color: "#121212",
    backgroundColor: "white"
 })

 const [btnText, setBtnText] =useState("Enable Dark Mode")
 
 const toggleStyle = (event)=> {
  
    if(myStyle.color === "#121212"){
        setMyStyle({
            color: "white",
            backgroundColor: "#121212"
        })
        setBtnText("Enable LIGHT Mode")
        event.target.className = setBtnText("Enable LIGHT Mode") || "className: btn btn-light my-3";
        
        // ***{for button color change on click
        // event.target.className = setBtnText("Enable LIGHT Mode") ? "className: btn btn-dark my-3" : "className:btn btn-light my-3";
        
        // const button = event.target.className;
        // if (button === "Enable LIGHT Mode") {
        //   event.target.className = "btn btn-dark my-3";
        // } 
        // else{
        //   event.target.className = "btn btn-light my-3";
        // }
        // for button color change on click }***
      
    }
    else{
        setMyStyle({
            color: "#121212",
            backgroundColor: "white"
        })
        setBtnText("Enable DARK Mode")
        event.target.className = setBtnText("Enable DARK Mode") || "className: btn btn-dark my-3";
        
        //***{for button color change on click
        // event.target.className = setBtnText("Enable DARK Mode") ? "className: btn btn-light my-3" : "className:btn btn-dark my-3";

        // const button = event.target.className;
        // if (button === "Enable DARK Mode") {
        //   event.target.className = "btn btn-light my-3";
        // } 
        // else{
        //   event.target.className = "btn btn-dark my-3";
        // }
        // for button color change on click}***
    }
 }
 
  return (
    <div className="container" style={myStyle}>
        <h4 className="my-3">ABOUT US</h4>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <button onClick={toggleStyle} className="btn btn-dark my-3">{btnText}</button>
            
    </div>
    </div>
  );
}

export default About