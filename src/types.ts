export interface ProfileData {
	name: string
	headline: string
	summary: string
	summarytwo: string
	location: string
	linkedinUrl: string
	githubUrl: string
	experience: Experience[]
	projects: Project[]
	education: Education[]
	skills: string[]
}

export interface Experience {
	title: string
	company: string
	location: string
	startDate: string
	endDate: string
	description: string
}

export interface Project {
	title: string
	description: string
	type: string
	techStack: string
	links: {
		app: string
		appLink: string
		code: string
		codeLink: string
	}
}

export interface Education {
	institution: string
	degree: string
	startDate: string
	endDate: string
}
