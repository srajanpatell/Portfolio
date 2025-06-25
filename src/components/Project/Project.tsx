import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/srajanpatell/BookWallah" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Educational Website</h3>
              <p>
              •   Developed an Educational Website that auto-adapts seamlessly to various screen sizes for optimal user experience. <br />
              •   User Friendly Menu for easy access to content and visually appealing layout with interactive elements. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Tailwind</li>
                <li>jQuery</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/srajanpatell/Scheduler" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>HR Scheduler</h3>
              <p>• Built an HR Scheduler that schedules the HR Meetings/Interviews.<br />     
              • Implemented Google Calendar API for Calendar Operations like Event Creation etc. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Google Calendar API</li> <li>dJango</li> <li>Axios</li> <li>MySQL</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/srajanpatell/intervue" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://intervue-beige.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Intervue.io</h3>
              <p>
              • Developed an frontend web application for intervue.io. <br />
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>MaterialUI</li>
                <li>TailwindCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}