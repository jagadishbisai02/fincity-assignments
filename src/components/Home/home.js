import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Project from "../Projects/projects";
import "./home.css";

const ProjectList = [
  {
    name: "Project Name",
    desc: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
    image:
      "https://res.cloudinary.com/df5wssoz1/image/upload/v1704396881/samples/fincity/pexels-elly-fairytale-3823207_1_pdgbwd.png",
  },
  {
    name: "Project Name",
    desc: "What was your role, your deliverables, if the project was personal, freelancing.",
    image:
      "https://res.cloudinary.com/df5wssoz1/image/upload/v1704396881/samples/fincity/Rectangle_6_vcekek.png",
  },
  {
    name: "Project Name",
    desc: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    image:
      "https://res.cloudinary.com/df5wssoz1/image/upload/v1704396817/samples/fincity/Rectangle_7_gapzvj.png",
  },
];

const Home = () => {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectList, setProjectList] = useState([]);

  const onAdd = (event) => {
    event.preventDefault();

    const newProject = {
      id: uuidv4(),
      projectName,
      projectLink,
      projectDesc,
    };
    setProjectList((prevPojectList) => [...prevPojectList, newProject]);
    setProjectName("");
    setProjectLink("");
    setProjectDesc("");
  };

  const projectsName = (event) => {
    setProjectName(event.target.value);
  };

  const projectsLink = (event) => {
    setProjectLink(event.target.value);
  };

  const projectsDesc = (event) => {
    setProjectDesc(event.target.value);
  };

  return (
    <div className="home-page">
      <Header />
      <div className="home-section">
        <div id="About" className="home-page-container">
          <div className="home-content">
            <p className="title">UI/UX Designer</p>
            <h1>Hello, my name is Madelyn Torff</h1>
            <p className="desc">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>
            <div>
              <a href="#Projects">
                <button type="button" className="btns projects">
                  Projects
                </button>
              </a>
              <a href="#">
                <button type="button" className="btns linked-in">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/df5wssoz1/image/upload/v1704388308/samples/fincity/fincity_ak9g2w.png"
            alt="home"
            className="home-image"
          />
        </div>
        <div className="project-form-container">
          <h2>Add Project</h2>
          <form onSubmit={onAdd}>
            <div className="input-label">
              <label>Project Name</label>
              <input
                className="form-group"
                type="text"
                name="projectName"
                value={projectName}
                onChange={projectsName}
              />
            </div>
            <div className="input-label">
              <label>Project Link</label>
              <input
                className="form-group"
                type="text"
                name="projectLink"
                value={projectLink}
                onChange={projectsLink}
              />
            </div>
            <div className="input-label">
              <label>Description</label>
              <textarea
                className="form-group-textarea"
                type="text"
                cols="100"
                name="projectDesc"
                value={projectDesc}
                onChange={projectsDesc}
              ></textarea>
            </div>
            <div className="btn-container">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://res.cloudinary.com/df5wssoz1/image/upload/v1704393271/samples/fincity/Vector_btv68n.png"
              alt="line"
              className="vectors"
            />
          </div>
        </div>
      </div>
      <>
        <div id="Projects" className="project-container">
          <h2>Projects</h2>
          <div className="project-list">
            <ul className="projects-list-container">
              {ProjectList.map((each) => (
                <li className="project-lists">
                  <div className="col-md-6 p-4">
                    <h3>{each.name}</h3>
                    <p>{each.desc}</p>
                    <button type="button">View Project</button>
                  </div>
                  <div className="col-md-6">
                    <img src={each.image} alt="project1" />
                  </div>
                </li>
              ))}
            </ul>
            {projectList.length > 0 ? (
              <>
                <ul className="projects-list-container">
                  {projectList.map((each) => (
                    <Project projects={each} key={each.id} />
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div className="no-projects">
                  <p>No projects are added</p>
                </div>
              </>
            )}
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default Home;
