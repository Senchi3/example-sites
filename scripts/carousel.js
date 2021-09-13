import * as bulmaCarousel from '../extensions/bulma-carousel.min.js';

// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
	element.bulmaCarousel.on('show', function(bulmaCarouselInstance) {
		console.log(bulmaCarouselInstance.index);
	});
}