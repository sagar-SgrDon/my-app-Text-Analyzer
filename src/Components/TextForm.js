import React, { useState } from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

// what I can add extra is  -> Fonst style, grammar & spell check

export default function TextForm(props) {
  const style = props.mode === "light" ? "white" : "#494949";
  const styleinvert = props.mode === "light" ? "black" : "white";
  const speechText = new SpeechSynthesisUtterance();
  // React State feature
  const [text, setText] = useState("");

  const convertUpper = () => {
    // console.log("UpperCase button was clicked");
    const textUpper = text.toUpperCase();
    setText(textUpper);
    props.showAlert("Converted to Uppercase", "success");
  };
  const convertLower = () => {
    // console.log("UpperCase button was clicked");
    const textUpper = text.toLowerCase();
    setText(textUpper);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleAlternateCLick = () => {
    let textAlt = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) textAlt += text[i].toUpperCase();
      else textAlt += text[i].toLowerCase();
    }
    setText(textAlt);
    props.showAlert("Converted to Alternate Design", "success");
  };

  const handleSpeakClick = (speechText) => {
    speechText.text = text;
    window.speechSynthesis.speak(speechText);
  };

  const onChangeHandler = (e) => {
    // console.log("on Change");
    setText(e.target.value);
  };

  const wordCount = (str) =>
    str.split(" ").filter(function (n) {
      return n !== "";
    }).length;

  return (
    <>
      <div className="container" style={{ color: styleinvert }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <GrammarlyEditorPlugin clientId="client_TPqL9uCRo36PLbTs3Kg5wg">
            <textarea
              className="form-control"
              placeholder="Enter Text here"
              style={{ backgroundColor: style, color: styleinvert }}
              value={text}
              onChange={onChangeHandler}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
          </GrammarlyEditorPlugin>
        </div>
        <button className="btn btn-primary" onClick={convertUpper}>
          to UpperCase
        </button>
        <button className="btn btn-success mx-3" onClick={convertLower}>
          to LowerCase
        </button>
        <button className="btn btn-danger " onClick={handleAlternateCLick}>
          aLtErNaTe TeXt
        </button>
        <button
          className="btn btn-dark mx-3"
          onClick={() => handleSpeakClick(speechText)}
        >
          Text to Speech
        </button>
      </div>
      <div className="container my-5" style={{ color: styleinvert }}>
        <h3>You text Summary</h3>
        <p>
          {wordCount(text)} Word(s) & {text.length} Char{" "}
        </p>
        <p>{0.005 * text.length} minute Read</p>
        <br />
        <h4>Text preview</h4>
        <p>{text.length > 0 ? text : `Enter text above to Preview here`}</p>
      </div>
    </>
  );
}
