import { ProfileData } from './types'

export const profileData: ProfileData = {
	name: 'Filips Masolovs',
	headline: 'Frontend Engineer @ Proxy Live Solutions™',
	summary:
		'Highly motivated Frontend Engineer with 5+ years of experience in designing, developing, and deploying scalable and reliable software solutions. Proven ability to collaborate effectively in agile environments and deliver high-quality code that meets and exceeds expectations. Passionate about cloud computing & machine learning and committed to continuous learning and innovation.',
	summarytwo:
		'Looking for opportunities to contribute to challenging projects and make a significant impact. Open to connecting with fellow engineers and industry professionals.',
	location: 'Riga, Latvia',
	linkedinUrl: 'https://www.linkedin.com/in/filips-masolovs/',
	githubUrl: 'https://github.com/FilipsMasolovs/',
	experience: [
		{
			title: 'Frontend Engineer',
			company: 'Proxy Live Solutions™',
			location: 'Riga, Latvia',
			startDate: '2022-05',
			endDate: '',
			description:
				'As a core member of the frontend team in the Online Gambling division, I contribute to the architecture, tech stack, code structure, and coding standards for our web applications.',
		},
		{
			title: 'Frontend Engineer',
			company: 'VASS',
			location: 'Riga, Latvia',
			startDate: '2021-06',
			endDate: '2022-04',
			description: 'Developed and implemented core features for industrial projects in the medical and sports fields, utilising React and JavaScript.',
		},
		{
			title: 'Frontend Engineer',
			company: 'Visual Composer',
			location: 'Riga, Latvia',
			startDate: '2019-09',
			endDate: '2021-05',
			description: 'Developed and maintained new features and fixed bugs for Visual Composer, a website builder for WordPress.',
		},
	],
	education: [
		{
			institution: 'Riga Technical University',
			degree: "Incomplete Bachelor's Degree in Business and Management",
			startDate: '2009-09',
			endDate: '2011-01',
		},
	],
	skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git', 'REST APIs'],
}
