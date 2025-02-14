import { jsPDF } from 'jspdf'

export const generatePdf = () => {
	const doc = new jsPDF()
	const element = document.getElementById('content-to-pdf')

	if (element) {
		doc.html(element, {
			callback: function (doc) {
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
