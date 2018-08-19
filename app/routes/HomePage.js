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
        <div style={{ color: "#6b6161" }}>
          <div
            style={{
              height: "100px",
              backgroundColor: "#fcecd7",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px"
            }}
          >
            <span
              style={{
                lineHeight: "20px",
                backgroundColor: "#b8e986",
                color: "#4a90e2"
              }}
            >
              Hello , World [Chloe9228]🖍
            </span>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                  alignItems: "center",
                  backgroundColor: "#fcecd7",
                  borderRadius: "4px"
                }}
              >
                <span>first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
