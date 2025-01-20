import './App.css';

function App() {
  return (
    <div className="app">
      <header className="website-header">
        <title>Personal Website</title>
        <link rel="stylesheet" href="App.css"></link>
      </header>

      <body className="website-body">
        <div className="bio">
          <h3 className="name-title">Your Name</h3>
          <p className="bio-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
        </div>
        <div className="education">
          <h4 className="education-title">Education</h4>
          <ul className="education-list">
            <li>Details of your education</li>
            <li>Potential second education</li>
          </ul>
        </div>
        <div className="work experience">
          <h4 className="work-title">Work Experience</h4>
          <p className="work1">Details of first work experience in a paragraph</p>
          <p className="work2">Details of second work experience in a paragraph</p>
        </div>
        <div className="skills">
          <h4 className="skills-title">Skills</h4>
            <ul className="skills-list">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
            </ul>
        </div>
        <div className="projects">
          <h4 className="projects-title">Projects</h4>
          <p className="project1">Details of project and description</p>
          <p className="project2">Details of project and description</p>
        </div>
      </body>
    </div>
  );
}

export default App;
