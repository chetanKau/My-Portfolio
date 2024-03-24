// import React from "react";
import "../Components/AllProjects.css";

function JSProjects() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Emoji Finder",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/chetanKau/Emoji-Project",
      HostedLink:
        "https://emoji-project-sandy.vercel.app/",
    },
    {
      img: "",
      Projectname: " Pokemon Project ",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/chetanKau/Pokemon--JS",
      HostedLink:
        "https://pokemon-search-pi.vercel.app/",
    },
    {
      img: "",
      Projectname: " Image Search App",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/chetanKau/Search-Images-API-JS",
      HostedLink:
        "https://search-images-beta.vercel.app/",
    },

    {
      img: "",
      Projectname: "Joke Generator",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/chetanKau/Dad-s-Joke-API-JS",
      HostedLink:
        "https://dad-s-joke.vercel.app/",
    },
    {
      img: "",
      Projectname: "Stop Watch",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/chetanKau/Stop-Watch-JS",
      HostedLink:
        "https://stop-watch-one-pearl.vercel.app/",
    },
  
    {
      img: "",
      Projectname: "LeaderBoard Project",
      Tech: "JavaScript",
      githubLink: "https://github.com/chetanKau/Leader-board-JS",
      HostedLink: "https://leader-board-drab.vercel.app/",
    },
    {
        img: "",
        Projectname: "Digital Clock",
        Tech: "JavaScript",
        githubLink: "https://github.com/chetanKau/Digital-Clock-JS",
        HostedLink: "https://digital-clock-eight-beta.vercel.app/",
      },
      
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index, array) => {
          return (
            <div className="card" key={index}>
              
                <img
                  src="https://th.bing.com/th/id/OIP.4LVKPoqv9bp7GRFNIWvunQHaHa?rs=1&pid=ImgDetMain"
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
                  This Project is Build with javaScript ,You can check github repo
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

export default JSProjects;
