import Swiper from 'swiper';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../scss/global/main.scss';

export const initSwiper = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination, Autoplay],

		spaceBetween: 30,
		centeredSlides: true,

		// transition speed
		speed: 1000, // Transition speed in ms
		effect: 'coverflow', // Effect to use for transitions (slide, fade, cube, coverflow, flip)
		grabCursor: true, // Enable grab cursor for better UX
		// Autoplay
		autoplay: {
			delay: 4000, // Delay between transitions in ms
			disableOnInteraction: false, // Continue autoplay after user interaction
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// Optional parameters
		direction: 'horizontal',
		loop: true,

		spaceBetween: 30,
		centeredSlides: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};
