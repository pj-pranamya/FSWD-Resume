import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/profile.jpeg';

function Home() {
  return (
    <div className="home-page">
      <img src={profileImage} alt="Profile" className="home-profile-img" />
      <h1>PJ Pranamya Jain</h1>
      <p className="home-intro">
        A Computer Science Engineering graduate passionate about design, development, and learning.
      </p>

      <div className="card-container">
        <Link to="/about" className="home-card">
          <h3>About Me</h3>
          <p>Get to know more about me, my interests, and background.</p>
        </Link>

        <Link to="/skills" className="home-card">
          <h3>Skills</h3>
          <p>Explore my technical and creative skillset.</p>
        </Link>

        <Link to="/projects" className="home-card">
          <h3>Projects</h3>
          <p>Check out the projects I've worked on.</p>
        </Link>

        <Link to="/contact" className="home-card">
          <h3>Contact</h3>
          <p>Find ways to get in touch with me.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
