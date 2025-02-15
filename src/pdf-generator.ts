import { jsPDF } from 'jspdf'

export const generatePdf = () => {
	const doc = new jsPDF()
	const element = document.getElementById('content-to-pdf')

	if (element) {
		const originalValues: { [key: string]: string } = {}
		const variablesToOverride = [
			'--font',
			'--bg-color',
			'--container-bg-color',
			'--text-color',
			'--heading-color',
			'--headline-color',
			'--section-border-color',
			'--item-bg-color',
			'--company-degree-color',
			'--dates-color',
			'--skills-border-color',
			'--skills-bg-color',
			'--footer-text-color',
			'--link-color',
			'--link-hover-color',
		]

		variablesToOverride.forEach((variable) => {
			originalValues[variable] = document.documentElement.style.getPropertyValue(variable)
		})

		document.documentElement.style.setProperty('--font', 'sans-serif')
		document.documentElement.style.setProperty('--bg-color', '#fff')
		document.documentElement.style.setProperty('--container-bg-color', '#fff')
		document.documentElement.style.setProperty('--text-color', '#000')
		document.documentElement.style.setProperty('--heading-color', '#000')
		document.documentElement.style.setProperty('--headline-color', '#333')
		document.documentElement.style.setProperty('--section-border-color', '#ccc')
		document.documentElement.style.setProperty('--item-bg-color', '#fff')
		document.documentElement.style.setProperty('--company-degree-color', '#000')
		document.documentElement.style.setProperty('--dates-color', '#333')
		document.documentElement.style.setProperty('--skills-border-color', '#ccc')
		document.documentElement.style.setProperty('--skills-bg-color', '#fff')
		document.documentElement.style.setProperty('--footer-text-color', '#333')
		document.documentElement.style.setProperty('--link-color', '#0077cc')
		document.documentElement.style.setProperty('--link-hover-color', '#005580')

		doc.html(element, {
			callback: function (doc) {
				variablesToOverride.forEach((variable) => {
					document.documentElement.style.setProperty(variable, originalValues[variable])
				})
				doc.save('FilipsMasolovs.pdf')
			},
			margin: [10, 10, 10, 10],
			autoPaging: 'text',
			x: 0,
			y: 0,
			width: 190,
			windowWidth: 675,
		})
	} else {
		console.error('Element with ID "content-to-pdf" not found.')
	}
}
