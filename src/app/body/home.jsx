export default function Home() {
  
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
            
            <div className="proj-sum">
              <p>Weather App</p>

              <p>A curriculum Javascript project for API data fetch and control using Promise based functions.</p>
            </div>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
          
          <div>
            <span className="proj-img" id='battleship'></span>
            
            <div className="proj-sum">
              <p>Battleship</p>
              
              <p>A curriculum Javascript project for Code Testing emphasizing the Test-driven development using Jest.</p>
            </div>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
          
          <div>
            <span className="proj-img" id="cv-app"></span>
            
            <div className="proj-sum">
              <p>CV App</p>

              <p>A curriculum React project on using Vite and rendering components using JSX.</p>
            </div>
            
            <span className='proj-links' >
              <span>Github</span>
              <span>Live</span>
            </span>
          </div>
          
          <div>
            <span className='proj-img' id="memory-card"></span>
            
            <div className="proj-sum">
              <p>Memory Card</p>

              <p>A curriculum React project on API control using React's useEffect hook.</p>
            </div>
            
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
