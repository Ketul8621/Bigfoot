import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter here");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    //console.log("Uppercase button was clicked");
    //setText("You have clicked on handleClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  };

  const handleCapClick = () => {
    let wordArray = text.split(" ");
    let newText = "";
    for (let i = 0; i < wordArray.length; i++) {
      let code = wordArray[i].charCodeAt(0);
      if (code >= 97 && code <= 122) {
        newText += String.fromCharCode(code - 32);
      } else {
        newText += wordArray[i][0];
      }

      for (let j = 1; j < wordArray[i].length; j++) {
        let arrayCode = wordArray[i].charCodeAt(j);
        if (arrayCode >= 65 && arrayCode <= 90) {
          newText += String.fromCharCode(arrayCode + 32);
        } else {
          newText += wordArray[i][j];
        }
      }

      if (i !== wordArray.length - 1) {
        newText += " ";
      }
    }

    setText(newText);
    props.showAlert("Text converted to Capitalized", "success");
  };

  const handleAltClick = () => {
    let wordArray = text.split(" ");
    let newText = "";

    for (let i = 0; i < wordArray.length; i++) {
      for (let j = 0; j < wordArray[i].length; j++) {
        let code = wordArray[i].charCodeAt(j);

        if (j % 2 === 0) {
          if (code >= 65 && code <= 90) {
            newText += String.fromCharCode(code + 32);
          } else newText += wordArray[i][j];
        } else {
          if (code >= 97 && code <= 122) {
            newText += String.fromCharCode(code - 32);
          } else newText += wordArray[i][j];
        }
      }

      if (i !== wordArray.length - 1) {
        newText += " ";
      }
    }

    setText(newText);
    props.showAlert("Text letters alternated", "success");
  };

  const handleInvClick = () => {
    let wordArray = text.split(" ");
    let newText = "";

    for (let i = 0; i < wordArray.length; i++) {
      for (let j = 0; j < wordArray[i].length; j++) {
        let code = wordArray[i].charCodeAt(j);
        if (code >= 65 && code <= 90) {
          newText += String.fromCharCode(code + 32);
        } else if (code >= 97 && code <= 122) {
          newText += String.fromCharCode(code - 32);
        } else newText += wordArray[i][j];
      }

      if (i !== wordArray.length - 1) {
        newText += " ";
      }
    }

    setText(newText);
    props.showAlert("Text letters inverted", "success");
  };

  let totalWords = text.split(" ").length;
  if (text.length === 0) totalWords = 0;
  else if (text[text.length - 1] === " ") {
    totalWords--;
  }

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
            id="text-form"
            value={text}
            onChange={handleChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>
          Capitalised Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleAltClick}>
          aLtErNaTiNg cAsE
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleInvClick}>
          Inverse Case
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {totalWords} words and {text.length} letters
        </p>
        <p>
          {Math.floor(totalWords / 125)} Minutes{" "}
          {Math.floor(((totalWords % 125) * 60) / 125)} sec read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textarea above to appear here."}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Enter the text here",
};
