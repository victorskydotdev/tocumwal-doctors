import anniversaryImg from '../../assets/anniversary-img.jpg';

const anniversaryImgWrap = document.querySelector('.anniversary-img-wrap');

export const loadAnniversaryAsset = () => {
	const assetTemp = (asset) => {
		return `
      <img class="img" src="${asset}" />
    `;
	};

	if (anniversaryImgWrap) {
		anniversaryImgWrap.innerHTML = assetTemp(anniversaryImg);
	}
};
