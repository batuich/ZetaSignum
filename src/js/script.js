import anime from 'animejs/lib/anime.es.js';
import lottie from 'lottie-web';

const MOBILE_BREAKPOINT = 576;
const TABLET_BREAKPOINT = 768;
const ANIME_FIRST_DELAY =200;
const TEXT_ANIME_DURATION = 150;
const TEXT_ANIME_STAGGER = 100;
const MOBILE_SCREEN =  document.documentElement.clientWidth < MOBILE_BREAKPOINT ? true : false;

window.addEventListener('DOMContentLoaded', () => {
	if(MOBILE_SCREEN){
		document.querySelector('.preload').remove();
		document.querySelector('video').remove();
		let mobileBack = document.createElement('img');
		mobileBack.src = 'img/back-mobile.jpg';
		mobileBack.classList.add('mobile-back');
		document.querySelector('.back').appendChild(mobileBack);
	}
});

window.addEventListener('load', () => {

	let logo = document.querySelector('#logo');
	let logoLottie = lottie.loadAnimation({
		container: logo, // the dom element that will contain the animation
		renderer: 'svg',
		loop: false,
		autoplay: true,
		path: 'lottie/logo.json' // the path to the animation json
	});

	// descr animation
	let descrAnime = anime({
		targets: '.descr-item',
		keyframes: [
			{
				duration: 0,
				opacity: 0,
				translateY: -20,
			},
			{
				duration: TEXT_ANIME_DURATION,
				opacity: 1,
				translateY: 0,
			}
		],
		easing: 'linear',
		delay: anime.stagger(TEXT_ANIME_STAGGER),
		autoplay: true,
		complete: () => {
			footerAnime.play();
		}
	});
	// descr animation
	let footerAnime = anime({
		targets: '.footer-item',
		keyframes: [
			{
				duration: 0,
				opacity: 0,
				translateY: -20,
			},
			{
				duration: TEXT_ANIME_DURATION,
				opacity: 1,
				translateY: 0,
			}
		],
		easing: 'linear',
		delay: anime.stagger(TEXT_ANIME_STAGGER),
		autoplay: false
	});

	if(!MOBILE_SCREEN) document.querySelector('.preload').classList.add('hide');
});