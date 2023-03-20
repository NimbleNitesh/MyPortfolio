import React from 'react'
import {AiOutlineFolder} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
const projectInfo = () => {
	return (
		<div className="myProject">
		<h1>My Noteworthy Projects</h1>
		<div className="project project__container">
			<div className="about__project">
			<div className="projectCards">
				<a href="https://github.com/NimbleNitesh/Pathfinding-visualizer" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Pathfinding Visualizer</h5>
					<small>A visualisation tool for various pathfinding algorithms. I built this application because I was fascinated by pathfinding algorithms, and wanted to visualize them.</small>
				</a>
				<a href="https://github.com/KartuzGupta/ME395_Quadcopter" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Realtime Crowd Surveillance Quadcopter</h5>
					<small>Used Parrot AR 2.0 Drone for our project and we made an autonomous working model that detects colour and accordingly sends commands for execution using Python and Nodejs.</small>
				</a>
				<a href="https://github.com/PrateekUp/AnalysisOfSDGscores2020-21DataScience" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Analysis of SDG scores 2020</h5>
					<small>Analysis of SDG scores for 2020-21 by NITI Aayog, India for all states and UTs doing Data Visualisation, Hypothesis Testing and Machine Learning Model using Python.</small>
				</a>
				<a href="https://github.com/NimbleNitesh/MyPortfolio" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Portfolio Website</h5>
					<small>ReactJS, Bootstrap, HTML/CSS</small>
				</a>
				<a href="https://github.com/NimbleNitesh/2001ME42_2022" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Python Assesment</h5>
					<small>Big Data Analysis</small>
				</a>
				<a href="https://github.com/NimbleNitesh/Open-CV-Basic-Projects" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Open-CV Basic Projects</h5>
					<small>Computer Vision, Image Processing, Python, Open-CV</small>
				</a>
			</div>
			<div className="codingProfile">
				<h1>Coding Profiles</h1>
				<div className="Handles">
					<a href="https://codeforces.com/profile/HorridBear" className="handleCards">
					<h5 className="high">HorridBear</h5>
					<small>Codeforces Handle</small>
					</a>

					<a href="https://codeforces.com/profile/HorridBear" className="handleCards">
					<h5 className="high">Nitesh620137</h5>
					<small>Leetcode Handle</small>
					</a>

					<a href="https://codeforces.com/profile/HorridBear" className="handleCards">
					<h5 className="high">Nitesh_abc</h5>
					<small>Codechef Handle</small>
					</a>
				</div>
			</div>
			<div className="Achievements">
				<h1>Some Achievements</h1>
				<ul>
					<li>AIR 35 in Atcoder ABC 279 among 8000+ participants</li>
					<li>Global Rank 368 in Codeforces Round 855 among 23000+ participants</li>
					<li>Global Rank 735 in Google Kickstart Round C as well as Round G</li>
					<li>Specialist on Codeforces with a peak rating of 1539</li>
					<li>Solved over 1000 problems related to Data Structures and Algorithms</li>
					<li>Ranked top 0.06 percentile among 1.5 million candidates in JEE Mains 2020</li>
					<li>Secured a Rank of 7859 in JEE Advanced 2020 among top 150,000 students</li>
				</ul>
			</div>
			</div>
		</div>
		</div>
	)
}

export default projectInfo
