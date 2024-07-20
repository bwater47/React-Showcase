// Export the portfolio function for the app to display the portfolio page when the user clicks on the portfolio tab.
export default function Portfolio() {
  // const projects = [
  //   {
  //     id: 1,
  //     title: 'Project 1',
  //     description: 'A brief description of Project 1.',
  //     imageUrl: 'url-to-image-of-project-1',
  //     projectUrl: 'url-to-project-1',
  //   },
  //   {
  //     id: 2,
  //     title: 'Project 2',
  //     description: 'A brief description of Project 2.',
  //     imageUrl: 'url-to-image-of-project-2',
  //     projectUrl: 'url-to-project-2',
  //   },
  // ];
  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {/* {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            <a href={project.projectUrl}>View Project</a>
          </div>
        ))} */}
      </div>
    </div>
  );
}
