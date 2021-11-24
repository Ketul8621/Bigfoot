import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const themeColor = {
  dark: {
    bgColor: "rgba(33,37,41,1)",
    color: "white",
  },
  light: {
    bgColor: "rgba(248,249,250,1)",
    color: "black",
  },
  teal: {
    bgColor: "#ffa781",
    color: "black",
  },
  orange: {
    bgColor: "#ffe042",
    color: "white",
  },
  blue: {
    bgColor: "#5e001f",
    color: "white",
  },
};

export default function Navbar(props) {
  const [preferredMode, setPreferredMode] = useState("");
  function handleChange(colorProp) {
    console.log(colorProp);
    setPreferredMode(colorProp);
    if (colorProp === "teal") {
      document.body.style.backgroundColor = "#993441";
    } else if (colorProp === "orange") {
      document.body.style.backgroundColor = "orangered";
    } else if (colorProp === "blue") {
      document.body.style.backgroundColor = "#00e1d9";
    }
  }

  useEffect(() => {
    setPreferredMode("");
  }, [props.mode]);
  return (
    <nav
      id="yo"
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: themeColor[preferredMode || props.mode].bgColor,
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: themeColor[preferredMode || props.mode].color }}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: themeColor[preferredMode || props.mode].color }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: themeColor[preferredMode || props.mode].color }}
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/*<form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>*/}

          <div>
            <button
              className="pallette-color teal"
              onClick={(event) => handleChange("teal")}
            ></button>
            <button
              className="pallette-color orange"
              onClick={(event) => handleChange("orange")}
            ></button>
            <button
              className="pallette-color blue"
              onClick={(event) => handleChange("blue")}
            ></button>
          </div>

          <div
            className="form-check form-switch"
            style={{ color: themeColor[preferredMode || props.mode].color }}
          >
            <input
              className="form-check-input"
              onClick={props.toggle}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Enter title here",
  aboutText: "About us",
};
