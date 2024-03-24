// import React from "react";
import "./Experience.css";
import 'animate.css';
function Experience() {
  const data = [
    {
      year: " Nov 2022- Currentely Working",
      name: " AAP Media Pvt. ltd",
      role: "Role : IT Support ",
      location: "Location : New Delhi",
      details:
        "Diagnosing and resolving technical issues related to hardware, software, network, and system configurations. Managing user accounts, permissions, and access rights within IT systems and applications. and Also support in Live Streaming of the channel. ",
    },
    // {
    //   year: "Jan 2022 – Feb 2022",
    //   name: " Sparks Foundation .",
    //   role: "Role : Web Development Intern ",
    //   location: "Location : Remote",
    //   details:
    //     "Created a user-friendly application allowing fund transfers and user account details display.Developed practical skills in financial transactions and database management.",
    // },
    // {
    //   year: "Jan 2022 – Feb 2022",
    //   name: " Lets Grow More .",
    //   role: "Role : Data Science Intern ",
    //   location: "Location : Remote",
    //   details:
    //     "Worked on a regression task project aimed at predicting the percentage of marks a student is expected to score based on the number of hours they studied.Utilized machine learning techniques to analyze the relationship between study hours and exam scores.Developed predictive models to estimate the expected percentage of marks with high accuracy. Enhanced skills in data analysis, machine learning, and model building through practica.",
    // },
  ];
  return (
    <>
      {data.map((ele, index) => {
        return (
          <div className="cardss animate__animated animate__fadeInUp animate__slow" key={index}>
            <div className="upper">
              <h1>{ele.year}</h1>
            </div>
            <hr id="hred" style={{backgroundColor:"white"}}/>
            <div className="lower">
              <div className="left">
                <p style={{color:"rgb(252, 16, 86)"}}>{ele.name}</p>
                <p>{ele.role}</p>
                <p>{ele.location}</p>
              </div>
              <div className="right">
                <br />
                <p>{ele.details}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
