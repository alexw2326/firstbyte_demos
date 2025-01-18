import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Website-Header">
        <title>Personal Website</title>
      </header>

      <body className="Website-Body">
        <div className="Bio">
          <h3>Your Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
        </div>
        <div className="Education">
          <h4>Education</h4>
          <ul>
            <li>Details of your education</li>
            <li>Potential second education</li>
          </ul>
        </div>
        <div className="Work Experience">
          <h4>Work Experience</h4>
          <p>Details of first work experience in a paragraph</p>
          <p>Details of second work experience in a paragraph</p>
        </div>
        <div className="Skills">
          <h4>Skills</h4>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
            </ul>
        </div>
        <div className="Projects">
          <h4>Projects</h4>
          <p>Details of project and description</p>
          <p>Details of project and description</p>
        </div>
      </body>
    </div>
  );
}

export default App;
