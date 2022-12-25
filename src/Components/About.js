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
            <strong> About This Website</strong>
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
            This is a website used to manipulate text You can paste your Text
            here and change it to UPPER CASE, lower case, for social media
            alternate pattern design and even Text to Speech is also available.
            So, Hurry! up, don't wait and try it out. More Features Coming Soon.
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
            <strong> About Me</strong>
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
            I am Sagar, the developer of this website. I am an Electronics
            Engineer but switched to Computer Science because of interest in
            playing with computers and manipulating softwares. Currently doing
            Post Graduation in Artificial Intelligence and Machine Learning.
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
            <strong> Merry Christmas</strong>
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
            {
              "We wish you a Merry Christmas and Happy New Year 2023 ☃️⛄🎄🎄❄️."
            }
          </div>
        </div>
      </div>
    </div>
  );
}
