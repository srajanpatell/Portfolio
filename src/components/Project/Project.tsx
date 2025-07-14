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
            </header>
            <div className="body">
              <h3>API Development</h3>
              <p>
              •   Developed APIs for Air2z subsidiary alliance of ShipCo. Transport Pvt. Ltd. NY<br />
              •   Performed various API operations like GET, POST, PUT, DELETE etc.<br />
              •   Implemented authentication and authorization using JWT.<br />
              •   Implemented rate limiting to prevent abuse of API.<br />
              •   Implemented logging to track API usage and identify potential security issues. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>FastAPI</li>
                <li>PyJWT</li>
                <li>MySQL</li>
                <li>Axios</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                </div>
            </header>
            <div className="body">
              <h3>Online Job Portal</h3>
              <p>• Built an online job portal for students to apply for jobs.<br />
              • Built Responsive UI using React js. | Material UI | Tailwind CSS. <br />
              • Implemented Custom APIs for job applications.<br />
              • Used Javascript Services for Backend Operations. <br />
              • Performed CRUD operations and Manipulated data using MongoDB.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Express</li> <li>Node</li> <li>Axios</li> <li>MongoDB</li> </ul> </footer>
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
              <h3>Cryptocurrency Exchange</h3>
              <p>
              • Designed a responsive UI using Material UI and Tailwind CSS. <br />
              • Developed a cryptocurrency exchange Analytics application. <br />
              • Implemented real-time price tracking using CoinGecko API. <br />
              • Implemented real-time data fetching using WebSockets. <br />   
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>CoinGecko API</li>
                <li>Socket.io</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}