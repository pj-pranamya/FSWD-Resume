import './About.css';

function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <div className="about-card-container">

        <div className="about-card">
          <h3>Introduction</h3>
          <p>
            I'm PJ Pranamya Jain, a Computer Science Engineering graduate from Malnad College of Engineering, Hassan.
            Passionate about learning, building web applications, and contributing to meaningful projects.
            I'm currently seeking opportunities to work in companies where I can grow and learn.
          </p>
        </div>

        <div className="about-card">
          <h3>Education</h3>
          <ul>
            <li><strong>10th:</strong> Royale Apollo International School, Hassan – 98.24%</li>
            <li><strong>PU:</strong> Masters PU College, Hassan – 96%</li>
            <li><strong>BE (CSE):</strong> Malnad College of Engineering, Hassan – CGPA: 9</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Hobbies</h3>
          <p>Singing, dancing, drawing, and exploring creative ideas through technology and art.</p>
        </div>

        <div className="about-card">
          <h3>Achievements</h3>
          <ul>
            <li>Second place in Drama (Navarasa), Incredia</li>
            <li>Battle of Bands – SIT College</li>
            <li>Band Coordinator – Abhivyakthi Cultural Team</li>
            <li>Winners in Explorica – St. Joseph's College</li>
            <li>1st Place in Artathon – MCE</li>
            <li>Attended UI/UX Hackathon</li>
            <li>Google Coursera UI/UX Certificate</li>
            <li>Python Certification – SoftTech Academy</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;
