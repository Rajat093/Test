import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handleTitleClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted to title case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("I'm copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "white",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-dark ms-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark ms-3" onClick={handleTitleClick}>
          Convert to Title Case
        </button>
        <button className="btn btn-dark ms-3" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-dark ms-3" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters are there
        </p>
        <p>
          Average human can read the above text in{" "}
          {0.008 * text.split(" ").length} Minutes
        </p>
      </div>
    </>
  );
}
