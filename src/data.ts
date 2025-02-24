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
	projects: [
		{
			title: 'M-DRIVE',
			description:
				'M-DRIVE is a visually appealing, Next.js–based file management application inspired by Google Drive. It leverages modern technologies such as Next.js (App Router), TypeScript, Clerk for authentication, PostHog for analytics, UploadThing for file uploads, and Drizzle ORM for database operations. The project is designed with a modular architecture for both server and client components.',
			type: 'personal',
			techStack: 'Next.js, React, Typescript, Zustand, Netlify, SingleStore, Drizzle ORM, Clerk, UploadThing, PostHog',
			links: {
				app: 'm-hub.link',
				appLink: 'https://m-hub.link',
				code: 'github.com/FilipsMasolovs/m-drive',
				codeLink: 'https://github.com/FilipsMasolovs/m-drive',
			},
		},
		{
			title: 'NoteMark',
			description:
				'NoteMark is a lightweight, mobile-first markdown note-taking app built with Next.js, React, and Zustand. It offers a seamless writing experience with real-time markdown preview, autosave functionality, intuitive note management (create, update, delete), and customizable themes. Designed for both desktop and mobile environments, NoteMark empowers users to effortlessly jot down ideas, format their notes with a rich markdown toolbar, and manage their content with smooth, responsive transitions.',
			type: 'personal',
			techStack: 'Next.js, React, Typescript, Zustand, Netlify, React-Markdown',
			links: {
				app: 'note-mark.netlify.app',
				appLink: 'https://note-mark.netlify.app',
				code: 'github.com/FilipsMasolovs/note-mark',
				codeLink: 'https://github.com/FilipsMasolovs/note-mark',
			},
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
	skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Git', 'REST APIs'],
}
