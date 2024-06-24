export default function Body() {
  return (
    <div id="body">
      <div id="intro">
        <p>Hi, I'm Edgar</p>
        <p>A Front-end Web Developer with good work mindset, task and detail oriented, effective and passionate.</p>
      </div>
      
      <div id="projects">
        <h1>My Works</h1>

        <div id="project-links">
          <div>
            <span className='proj-img' id="weather-app"></span>
            
            <p className="proj-sum">
              <h2>Weather App</h2>
              A curriculum Javascript project for API data fetch and control using Promise based functions.
            </p>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
          
          <div>
            <span className="proj-img" id='battleship'></span>
            
            <p className="proj-sum">
              <h2>Battleship</h2>
              A curriculum Javascript project for Code Testing emphasizing the Test-driven development using Jest.
            </p>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
          
          <div>
            <span className="proj-img" id="cv-app"></span>
            
            <p className="proj-sum">
              <h2>CV App</h2>
              A curriculum React project on using Vite and rendering components using JSX.
            </p>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
          
          <div>
            <span className='proj-img' id="memory-card"></span>
            
            <p className="proj-sum">
              <h2>Memory Card</h2>
              A curriculum React project on API control using React's useEffect  hook.
            </p>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
