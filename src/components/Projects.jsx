import { useState } from "react";
import projectsData from "../components/UI/projectData.jsx";
import VideoModal from "../components/VideoModal";
import "../Styles/Projects.css";

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  const renderCta = (project) => {
    if (project.linkType === "video") {
      return (
        <button
          type="button"
          className="btn btn-custom"
          onClick={() =>
            setActiveVideo({
              title: project.title,
              embedUrl: project.videoEmbed,
            })
          }
        >
          Video
        </button>
      );
    }

    return (
      <a
        href={project.liveLink}
        className="btn btn-custom"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a>
    );
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {projectsData.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card card-custom">
              <div className="project-image-container">
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.title}
                />
              </div>
              <div className="card-img-overlay">
                <h2 className="card-title">{project.title}</h2>
                {renderCta(project)}
              </div>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                {renderCta(project)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <VideoModal
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.title}
        embedUrl={activeVideo?.embedUrl}
      />
    </div>
  );
}
