import React from "react";

export default function About(props) {
  const style = props.mode === "light" ? "white" : "#494949";
  const styleInvert = props.mode === "light" ? "black" : "white";
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            type="button"
            style={{ backgroundColor: style, color: styleInvert }}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            About This Website
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div
            className="accordion-body"
            style={{ backgroundColor: style, color: styleInvert }}
          >
            <strong>
              This is a website used to manipulate text You can paste your Text
              here and change it to UPPER CASE, lower case, for social media
              alternate pattern design and even Text to Speech is also
              available. So, Hurry! up, don't wait and try it out. This has
              inbuilt Grammar & spell check feature also
            </strong>
            . [Extra Text] It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing
            and hiding via CSS transitions. You can modify any of this with
            custom CSS or overriding our default variables. It's also worth
            noting that just about any HTML can go within the .accordion-body,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button collapsed"
            style={{ backgroundColor: style, color: styleInvert }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            About Me
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div
            className="accordion-body"
            style={{ backgroundColor: style, color: styleInvert }}
          >
            <strong>
              I am Sagar, the developer of this website. I am an Electronics
              Engineer but switched to Computer Science because of interest in
              playing with computers and manipulating softwares related to
              computers.{" "}
            </strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            style={{ backgroundColor: style, color: styleInvert }}
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Merry Christmas
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div
            className="accordion-body"
            style={{ backgroundColor: style, color: styleInvert }}
          >
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the .accordion-body, though the
            transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
}
