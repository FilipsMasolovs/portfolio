import React from 'react'
import ReactDOM from 'react-dom/client'
import { profileData } from './data'
import './index.css'
import { generatePdf } from './pdf-generator'

const App: React.FC = () => {
	return (
		<div className='container'>
			<div id='content-to-pdf'>
				<header>
					<h1>{profileData.name}</h1>
					<p className='headline'>{profileData.headline}</p>
				</header>

				<section className='summary'>
					<h2>Summary</h2>
					<div>
						<p>{profileData.summary}</p>
						<p>{profileData.summarytwo}</p>
					</div>
				</section>

				<section className='experience'>
					<h2>Experience</h2>
					{profileData.experience.map((exp, index) => (
						<div
							key={index}
							className='experience-item'
						>
							<h3>{exp.title}</h3>
							<p className='company'>{exp.company}</p>
							<p className='dates'>
								{exp.startDate} - {exp.endDate || 'Present'}
							</p>
							<p>{exp.description}</p>
						</div>
					))}
				</section>

				<section className='education'>
					<h2>Education</h2>
					{profileData.education.map((edu, index) => (
						<div
							key={index}
							className='education-item'
						>
							<h3>{edu.institution}</h3>
							<p className='degree'>{edu.degree}</p>
							<p className='dates'>
								{edu.startDate} - {edu.endDate}
							</p>
							{edu.description && <p>{edu.description}</p>}
						</div>
					))}
				</section>

				<section className='skills'>
					<h2>Skills</h2>
					<ul>
						{profileData.skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</section>

				<footer>
					<p>
						<a
							href={profileData.linkedinUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						{profileData.githubUrl && (
							<>
								{' | '}
								<a
									href={profileData.githubUrl}
									target='_blank'
									rel='noopener noreferrer'
								>
									GitHub
								</a>
							</>
						)}
					</p>
					<p>Location: {profileData.location}</p>
				</footer>
			</div>
			<button
				className='download-button'
				aria-label='Download CV'
				onClick={generatePdf}
			>
				<svg viewBox='0 0 29.978 29.978'>
					<g>
						<path d='M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012   v-8.861H25.462z' />
						<path d='M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723   c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742   c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193   C15.092,18.979,14.62,18.426,14.62,18.426z' />
					</g>
				</svg>
			</button>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
