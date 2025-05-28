import './Skills.css';

function Skills() {
  return (
    <div className="skills-page">
      <h2>My Skills</h2>

      <div className="skills-section">
        <h3>Web Development</h3>
        <ul>
          <li>Proficient in React.js for building dynamic user interfaces</li>
          <li>Experience integrating Firebase for backend services</li>
          <li>Hands-on with Node.js for server-side development (applied in projects)</li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Design</h3>
        <ul>
          <li>Skilled in Figma for creating intuitive UI/UX designs</li>
          <li>Experience with Adobe XD and Sketch for wireframing and prototyping</li>
          <li>Knowledge of design principles: color theory, typography, and responsive layouts</li>
          <li>Basic understanding of animation and micro-interactions for enhanced user experience</li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Programming</h3>
        <ul>
          <li>Competent in Python programming for automation and data analysis</li>
          <li>Familiar with algorithms and data structures to solve complex problems</li>
          <li>Experience writing clean, maintainable code and debugging</li>
          <li>Basic knowledge of RESTful API development and consumption</li>
          <li>Understanding of Object-Oriented Programming concepts</li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Strong team coordination and leadership abilities</li>
          <li>Effective communication skills in collaborative environments</li>
          <li>Creative problem-solving and critical thinking</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
