import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>MCE Student Companion Website</h3>
          <p>
            Developed a comprehensive full-stack platform using React, Firebase, Node.js, and Google Drive API to empower students, teachers, and club members. The platform enables seamless uploading of study materials, event management, and placement updates, providing easy access to educational resources.
          </p>
        </div>

        <div className="project-card">
          <h3>FarmGain – UI/UX Design (Figma)</h3>
          <p>
            Designed an intuitive user interface focused on empowering farmers by enabling direct sales to consumers, effectively eliminating middlemen and improving profitability.
          </p>
        </div>

        <div className="project-card">
          <h3>Textbook to PPT Converter (Ongoing)</h3>
          <p>
            Currently developing an NLP-powered tool to automatically transform textbook content into presentation slides, enhancing study efficiency and content delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
