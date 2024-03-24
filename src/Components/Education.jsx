import React from "react";
import "./Education.css";
import 'animate.css';
function Education() {
 
  const data = [
    {
        degree:"Bachelors of Technology",
      college: "Sunderdeep Engineering College, Ghaziabad",
      year: "2015-2019",
      branch: "Branch : Computer Science & Enginnering (CSE)",
      cgpa: "Percentage: 69%",
    },
    {
        degree:"Higher Secondary Education(HSC)",
      college: "TSS Inter College Hapur",
      year: "2013-2015",
      branch:
        "Board: Uttar Pradesh",
      cgpa: "Percentage: 74%",
    },
    {
        degree:"Secondary Education(SSC)",
      college: "TSS Inter College Hapur",
      year: "2011-2013",
      branch:
        "Board: Uttar Pradesh",
      cgpa: "Percentage: 74%",
    },
  ];
  return (
    <>
      {data.map((ele, index) => {
        return (
          <div className="cardss" key={index}>
            <div className="upper">
              <h1 style={{color:"rgb(19, 185, 185)"}}>{ele.degree}</h1>
              <h3 style={{color:"rgb(252, 16, 86)"}}>{ele.year}</h3>
            </div>
            <hr id="hred" style={{backgroundColor:"white"}}/>
            <div className="lower">
              <p style={{color:"white"}}>{ele.college}</p>
              <p>{ele.branch}</p>
              <p>{ele.cgpa}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Education;
