import React from 'react'
import {AiOutlineFolder} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
import codeType from "../assets/code-typing-animate.svg";
import codechef from "../assets/codechef.png";
import codeforces from "../assets/codeforces.png";
import leetcode from "../assets/leetcode.webp";
import programmer from "../assets/programmer.jpg";

const projectInfo = () => {
	return (
		<div className="myProject">
		<h1>My Noteworthy Projects</h1>
		<div className="project project__container">
			<div className="about__project">
			<div className="projectCards">
				<a href="https://github.com/NimbleNitesh/HoverWorld" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">HoverWorld</h5>
					<small>A MERN stack web development with CRUD application using refine framework. This is a website for renting and purchasing drones and related equipment.</small>
				</a>
				<a href="https://github.com/KartuzGupta/ME395_Quadcopter" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Terrain Map Generation</h5>
					<small>Used Parrot AR 2.0 Drone and Python to develop a model to generate a panorama of the area recorded by the semi-autonomous drone.</small>
				</a>
				<a href="https://github.com/PrateekUp/AnalysisOfSDGscores2020-21DataScience" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Generate Avatar using GANs</h5>
					<small></small>
				</a>
				<a href="https://github.com/NimbleNitesh/StockPricePredictionModels" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Stock Price Prediction Model</h5>
					<small>An attempt to assess the performnce of various prediction model on Historical Data of Tesla and S&P 500.</small>
				</a>
				<a href="https://github.com/NimbleNitesh/AnalysisOfSDGscores2020-21DataScience" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Analysis of SDG Score 2020</h5>
					<small>Analysis of SDG scores for 2020-21 by NITI Aayog, India for all states and UTs doing Data Visualisation, Hypothesis Testing and Machine Learning Model using Python.</small>
				</a>
				<a href="https://github.com/NimbleNitesh/Pathfinding-visualizer" className="about__card__projects">
					<AiOutlineFolder size={40} style={{color: "#64ffda", background:"transparent"}} />
					<FiGithub size={20} style={{color: "#ccd6f6", background:"transparent"}} />
					<h5 className="high">Pathfinding Visualizar</h5>
					<small>A visualisation tool for various pathfinding algorithms. I built this application because I was fascinated by pathfinding algorithms, and wanted to visualize them.</small>
				</a>
			</div>
			<div className="codingProfile">
				<h1>Coding Profiles</h1>
				<div className="Handles_container">
				<div className="Handles">
					<div style={{display: "flex", gap: 15}}>
					<a href="https://codeforces.com/profile/HorridBear" className="handleCards">
					{/* <h5 className="high">HorridBear</h5> */}
					<img src={codeforces} alt="codeforces" width={50 } height={50 }/>
					<small>Codeforces Handle</small>
					</a>

					<a href="https://codeforces.com/profile/HorridBear" className="handleCards">
					{/* <h5 className="high">Nitesh620137</h5> */}
					<img src={leetcode} alt="leetcode" width={50 } height={50 }/>
					<small>Leetcode Handle</small>
					</a>
					</div>
					<a href="https://codeforces.com/profile/HorridBear" className="handleCards">
					{/* <h5 className="high">Nitesh_abc</h5> */}
					<img src={codechef} alt="codechef" width={50 } height={50 }/>
					<small>Codechef Handle</small>
					</a>
				</div>
				<div>
				<img src={codeType} alt="codeType" width={500 } height={500 }/>
				</div>
				</div>
			</div>
			<div className="Achievements">
				<h1>Some Achievements</h1>
				<div style={{display: "flex"}}>
				<img src={programmer} className='achi' alt="programmer" width={500 } height={500 }/>
				<ul>
					<li>Expert on Codeforces (Max Rating: 1700) | Knight on Leetcode (Max Rating: 2070).</li>
					<li>Secured a global rank of 92 in Google Farewell Rounds A.</li>
					<li>Selected for Amazon’s ML Summer School, an exclusive program led by scientists and experts in ML at Amazon.</li>
					<li>Secured Rank 1 in DSA Fortnightly -21 organized by Scaler Academy.</li>
					<li>Successfully completed IIT Kharagpur’s Summer of Quant program, gaining insights into fundamental topics like Stock Markets, Algorithmic Trading, Derivatives, and Machine Learning in Quantitative Finance.</li>
					<li>Ranked top 0.06 percentile among 1.5 million candidates in JEE Mains 2020.</li>
					<li>Achieved an Indian Rank of 195 in Meta Hackercup 2023, securing a T-shirt from Meta.</li>
				</ul>
				</div>
			</div>
			</div>
		</div>
		</div>
	)
}

export default projectInfo
