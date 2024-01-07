import "./projects.css";
const Project = (props) => {
  const { projects } = props;
const {projectName, projectDesc, projectLink} = projects

  return (
    <li className="project-lists">
      <div className="col-md-6 p-4">
        <h3>{projectName}</h3>
        <p>{projectDesc}</p>
        <button type="button">View Project</button>
      </div>
      <div className="col-md-6">
        <img
          src="https://res.cloudinary.com/df5wssoz1/image/upload/v1704396881/samples/fincity/pexels-elly-fairytale-3823207_1_pdgbwd.png"
          alt="project1"
        />
      </div>
    </li>
  );
};

export default Project;
