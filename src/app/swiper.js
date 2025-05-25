import Swiper from 'swiper';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../scss/main.scss';

export const initSwiper = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination, Autoplay],

		spaceBetween: 30,
		centeredSlides: true,

		// Autoplay
		autoplay: {
			delay: 3000, // Delay between transitions in ms
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
