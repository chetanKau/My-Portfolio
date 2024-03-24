import React from "react";
import "../Components/AllProjects.css";

function HtmlProjects() {
  const ReactProjects = [
    
    {
      img: "",
      Projectname: " YouTube UI ",
      Tech: "HTML/CSS",
      githubLink:
        "https://github.com/chetanKau/Youtube-clone",
      HostedLink:
        "https://youtube-clone-lilac-alpha.vercel.app/",
    },
  

    {
      img: "",
      Projectname: "Tic tac Toe",
      Tech: "HTML/CSS",
      githubLink:
        "https://github.com/chetanKau/Tic-Tac-Toe",
      HostedLink:
        "https://tic-tac-toe-sigma-jet.vercel.app/",
    },
   
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index, array) => {
          return (
            <div className="card" key={index} >
              
                <img
                  src="https://th.bing.com/th/id/OIP.hfhQisj6EWygr3BuYtoMAQHaEK?rs=1&pid=ImgDetMain"
                  alt=""
                  width={300}
                  height={180}
                  style={{
                    position: "absolute",
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:"2px auto",
                    overflow:"hidden",
                   
                  }}
                />
            

              <div className="card-content">
                <h2 className="card-title">{ele.Projectname}</h2>
                <p className="card-body">
                  This Project is Build with React js ,You can check github repo
                  and live demo of project here.!
                </p>
                <a href={ele.githubLink} className="button">
                  GitHub
                </a>
                &nbsp;
                <a href={ele.HostedLink} className="button">
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HtmlProjects;
