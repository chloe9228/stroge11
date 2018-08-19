/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <span
          style={{
            textOverflow: "ellipsis",
            backgroundColor: "#ca8787",
            color: "#ffffff"
          }}
        >
          Brand experience marketer  ~
        </span>
        <div style={{ color: "#6b6161" }}>
          <div>
            <span
              style={{
                lineHeight: "20px",
                backgroundColor: "#b8e986",
                color: "#4a90e2"
              }}
            >
              Jiyeon Kang🖍
            </span>
            <div><div /></div>
          </div>
        </div>
        <a href="#https://www.facebook.com/fascinatingjiyeon">
          <span>Facebook</span>
        </a>
        <img
          src="https://github.com/chloe9228/stroge11/blob/master/app/assets/12711284_10207357202781419_5625335062817740761_o.jpg?raw=true"
          style={{
            width: "300px",
            display: "inline-block",
            alignItems: "center"
          }}
        />
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
