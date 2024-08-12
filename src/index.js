import '../src/scss/main.scss';

import { runAlert } from './app/alert';
import { loadNavbar } from './app/navbar';
import { loadImgAssets } from './app/img-assets';
import { loadFooterImgs } from './app/footer';

// calling the functions
loadNavbar();
loadImgAssets();
loadFooterImgs();
