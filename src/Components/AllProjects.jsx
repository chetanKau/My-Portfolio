// import React from "react";
import "../Components/AllProjects.css";

function AllProjects() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Quizz game",
      Tech: "React",
      githubLink:
        "https://github.com/chetanKau/Quizz-App",
      HostedLink:
        "https://quiz-by-chetan.netlify.app/",
    },
    {
      img: "",
      Projectname: " Progress Bar ",
      Tech: "React",
      githubLink:
        "https://github.com/chetanKau/Progress_Bar_ReactJS",
      // HostedLink:
      //   "https://65e765797fe8334bff715741--vocal-figolla-1093ab.netlify.app/",
    },
    {
      img: "",
      Projectname: "Shopping Cart",
      Tech: "React",
      githubLink:
        "https://github.com/chetanKau/Cart-Item-React-JS",
      HostedLink:
        "https://cart-add-items.netlify.app/",
    },

    {
      img: "",
      Projectname: "Grocery Bud",
      Tech: "React",
      githubLink:
        "https://github.com/chetanKau/Grocery-Item-Reactjs",
      HostedLink:
        "https://create-grocery-list-items.netlify.app/",
    },
    // {
    //   img: "",
    //   Projectname: "Gym Page",
    //   Tech: "React",
    //   githubLink:
    //     "https://github.com/tejal29may/ReactAssignment/tree/main/Assignment9_Classwork_GymWebsite",
    //   HostedLink:
    //     "https://github.com/tejal29may/ReactAssignment/tree/main/Assignment9_Classwork_GymWebsite",
    // },
    // {
    //   img: "",
    //   Projectname: "Geek Food Site",
    //   Tech: "React",
    //   githubLink:
    //     "https://github.com/tejal29may/ReactAssignment/tree/main/Assignment3_classWork",
    //   HostedLink: "https://react-assignment-vyru.vercel.app/",
    // },
    {
      img: "",
      Projectname: "Portfolio",
      Tech: "React",
      githubLink: "https://github.com/tejal29may/PortFolio_React",
      HostedLink: "https://port-folio-react-ten.vercel.app/",
    },
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index) => {
          return (
            <div className="card" key={index} >
              
                <img
                  src="https://wallpapercave.com/wp/wp5542781.jpg"
                  alt=""
                  width={290}
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

export default AllProjects;
