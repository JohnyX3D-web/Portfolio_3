"use strict";
const rewiewsSwiper = document.querySelector(".swiper-rewiews");

if (rewiewsSwiper) {
	const swiper = new Swiper(".swiper-rewiews", {
		// Optional parameters
		autoHeight: true,
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
}
