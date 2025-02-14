export interface ProfileData {
	name: string
	headline: string
	summary: string
	summarytwo: string
	location: string
	linkedinUrl: string
	githubUrl: string
	experience: Experience[]
	education: Education[]
	skills: string[]
}

export interface Experience {
	title: string
	company: string
	location?: string
	startDate: string
	endDate?: string
	description: string
}

export interface Education {
	institution: string
	degree: string
	startDate: string
	endDate: string
	description?: string
}
