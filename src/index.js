import '../src/scss/main.scss';

import { runAlert } from './app/alert';
import { loadNavbar } from './app/navbar';
import { loadImgAssets } from './app/img-assets';
import { loadFooterImgs } from './app/footer';
import { accordionFunct } from './app/accordion';
import { showStaffBio } from './app/staff-bio';
import { submitForm } from './app/form-interaction';

import { enablePageTransition } from './app/page-transition';
// import { submitFBackForm } from './app/feedback-form'; // not importing this function as it not being used in the project
// import { sendEventToNetFunct } from './app/event';
// sendEventToNetFunct();

import { initSwiper } from './app/swiper';
import { loadIcons } from './app/hero-icons';
import { loadShowCaseImages } from './app/showcase';
import { showPhoneOnScroll } from './app/handle-phone';
import { triggerExitIntent } from './app/exit-intent';
import { modifyBlogPageTitle } from './app/blog/fetch-blog';
import { renderBlogPost } from './app/blog/render-blog-post';

// wart page functions imports
import { renderWartHeroImg } from './app/wart/wart-script';
import { runIntersectionOb } from './app/wart/intersection';

renderWartHeroImg();
runIntersectionOb();

// calling the functions
loadNavbar();
loadImgAssets();
loadFooterImgs();
accordionFunct();
showStaffBio();

// submitForm();
enablePageTransition();
// submitFBackForm(); // not importing this function as it not being used in the project

document.addEventListener('DOMContentLoaded', () => {
	initSwiper();
	loadIcons();
	loadShowCaseImages();
	modifyBlogPageTitle();
});

showPhoneOnScroll();
triggerExitIntent();
renderBlogPost();
