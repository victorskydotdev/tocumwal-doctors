import img1 from '../assets/showcase/bg1.jpg';
import img2 from '../assets/showcase/bg2.jpg';
import img3 from '../assets/showcase/bg3.jpg';
import img4 from '../assets/showcase/bg4.jpg';
import img5 from '../assets/showcase/bg5.jpg';
import img6 from '../assets/showcase/bg6.jpg';
import img7 from '../assets/showcase/bg7.jpg';
import img8 from '../assets/showcase/bg8.jpg';
import img9 from '../assets/showcase/bg9.jpg';
import img10 from '../assets/showcase/bg1.jpg';
import img11 from '../assets/showcase/bg2.jpg';
import img12 from '../assets/showcase/bg3.jpg';
import img13 from '../assets/showcase/bg4.jpg';
import img14 from '../assets/showcase/bg5.jpg';
import img15 from '../assets/showcase/bg6.jpg';
import img16 from '../assets/showcase/bg7.jpg';
import img17 from '../assets/showcase/bg8.jpg';
import img18 from '../assets/showcase/bg9.jpg';
import img19 from '../assets/showcase/bg1.jpg';
import img20 from '../assets/showcase/bg2.jpg';
import img21 from '../assets/showcase/bg3.jpg';
import img22 from '../assets/showcase/bg4.jpg';
import img23 from '../assets/showcase/bg5.jpg';
import img24 from '../assets/showcase/bg6.jpg';
import img25 from '../assets/showcase/bg7.jpg';
import img26 from '../assets/showcase/bg8.jpg';
import img27 from '../assets/showcase/bg9.jpg';
import img28 from '../assets/showcase/bg1.jpg';
import img29 from '../assets/showcase/bg2.jpg';
import img30 from '../assets/showcase/bg3.jpg';
import img31 from '../assets/showcase/bg4.jpg';
import img32 from '../assets/showcase/bg5.jpg';
import img33 from '../assets/showcase/bg6.jpg';
import img34 from '../assets/showcase/bg7.jpg';
import img35 from '../assets/showcase/bg8.jpg';
import img36 from '../assets/showcase/bg9.jpg';

const imageArr = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
	img24,
	img25,
	img26,
	img27,
	img28,
	img29,
	img30,
	img31,
	img32,
	img33,
	img34,
	img35,
	img36,
];
const showcase = document.querySelectorAll('.showcase');

export const loadShowCaseImages = () => {
	if (!showcase) return;

	showcase.forEach((wrap, index) => {
		wrap.innerHTML = `<img src="${imageArr[index]}" alt="showcase image" />`;
	});
};
