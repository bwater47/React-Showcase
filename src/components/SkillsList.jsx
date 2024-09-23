import React from "react";
import "../Styles/SkillsList.css";

const SkillsList = () => {
  const skills = {
    Languages: ["HTML", "CSS", "JavaScript"],
    Libraries: ["jQuery", "APIs", "GraphQL", "Handlebars.js"],
    Frameworks: ["Express.js", "React.js", "Next.js"],
    "Data Science": ["Time Complexity", "Data Structure"],
    Tools: [
      "GitHub",
      "Git Bash",
      "VS Code",
      "Bootstrap",
      "Flowbite",
      "Tailwind CSS",
      "Object-Relational Mapping",
      "Node.js",
      "Object-Oriented Programming",
      "Insomnia",
      "Progressive Web Applications",
      "MongoDB Compass",
      "Mongoose",
      "Vite",
      "Render",
      "Heroku",
      "Netlify",
      "Amazon Web Services",
    ],
    Databases: ["MongoDB Atlas", "PostgresSQL", "NoSQL"],
    Architecture: ["Model-View-Controller"],
  };

  return (
    <div className="skills-list">
      <h2>Technical Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
