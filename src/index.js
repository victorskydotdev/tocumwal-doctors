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

// calling the functions
loadNavbar();
loadImgAssets();
loadFooterImgs();
accordionFunct();
showStaffBio();

// submitForm();
enablePageTransition();
// submitFBackForm(); // not importing this function as it not being used in the project
