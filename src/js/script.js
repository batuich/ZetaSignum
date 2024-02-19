import anime from 'animejs/lib/anime.es.js';
import lottie from 'lottie-web';

const MOBILE_BREAKPOINT = 576;
const TABLET_BREAKPOINT = 768;
const ANIME_FIRST_DELAY =200;
const TEXT_ANIME_DURATION = 150;
const TEXT_ANIME_STAGGER = 100;

window.addEventListener('load', () => {

	let logo = document.querySelector('#logo');
	let logoLottie = lottie.loadAnimation({
		container: logo, // the dom element that will contain the animation
		renderer: 'svg',
		loop: false,
		autoplay: true,
		path: 'lottie/logo.json' // the path to the animation json
	});

	// words animation
	let wordsAnime = anime({
		targets: '.words-item',
		keyframes: [
			{
				duration: ANIME_FIRST_DELAY,
				opacity: 0,
				translateY: -20,
			},
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
			descrAnime.play();
		}
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
		autoplay: false,
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
	document.querySelector('.preload').classList.add('hide');
});