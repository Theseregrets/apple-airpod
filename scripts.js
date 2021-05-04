//intro

const intro = document.querySelector('.intro')
const video = document.querySelector('video')
const text = intro.querySelector('h1')

//end section

const section = document.querySelector('section')
const end = section.querySelector('h1')

//scrollmagic

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 21500,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//video animation
let accelAmount = .8;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 500;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;

    video.currentTime = delay;
}, 33.3);