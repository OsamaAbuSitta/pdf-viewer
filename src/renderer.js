// src/renderer.js
async function renderPdf(pdfDocument) {
	try {
		const pdf = await pdfjsLib.getDocument(pdfDocument).promise;
		const pageNumber = 1;
		const page = await pdf.getPage(pageNumber);
		const scale = 1.5;
		const viewport = page.getViewport({ scale });
		const canvas = document.getElementById('pdfContainer');
		const context = canvas.getContext('2d');
		canvas.height = viewport.height;
		canvas.width = viewport.width;
		const renderContext = {
			canvasContext: context,
			viewport,
		};
		page.render(renderContext);
	} catch (error) {
		console.error(error);
	}
}
renderPdf('../assets/my_document.pdf'); // This is the path to the PDF file.