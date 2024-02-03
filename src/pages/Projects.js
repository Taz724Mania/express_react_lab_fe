import { useLoaderData } from "react-router-dom";

const projects = useLoaderData()

const Projects = (props) => {
    return projects.map((project) => (
        <div>
          <h1>{project.name}</h1>
          <img src={project.image} />
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>live site</button>
          </a>
        </div>
      ));
  }

export default Projects