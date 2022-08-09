gsap.registerPlugin(ScrollTrigger);

gsap.from(".first-gsap", {
    duration: 1.5,
    y: 200,
    rotation: 90
});
gsap.from(".btn-date", {
    duration: 3,
    y: -200,
    rotation: 360,
    scale: 3,
    border: 5,
});

gsap.from(".cloudy", {
    scrollTrigger: {
        trigger: "#about_heading",
        toggleActions: "restart none none none"
    },
    x: 200,
    duration: 1,
    opacity: 0.1,
})
gsap.from(".cloudy-text", {
    scrollTrigger: {
        trigger: "#about_heading",
        toggleActions: "restart none none none"
    },
    x: -400,
    duration: 1,
    opacity: 0.1,
    scale: 0.3
})

gsap.from(".rainy-text", {
    scrollTrigger: {
        trigger: ".cloudy",
        toggleActions: "restart none none none"
    },
    x: 500,
    duration: 1.5,
    opacity: 0.1,
    scale: 0.3
})
gsap.from(".rainy", {
    scrollTrigger: {
        trigger: ".cloudy",
        toggleActions: "restart none none none"
    },
    x: -200,
    duration: 1.5,
    opacity: 0.1
})

gsap.from(".snowy", {
    scrollTrigger: {
        trigger: ".rainy",
        toggleActions: "restart none none none"
    },
    x: 400,
    duration: 2,
    opacity: 0.1
})
gsap.from(".snowy-text", {
    scrollTrigger: {
        trigger: ".rainy",
        toggleActions: "restart none none none"
    },
    x: -400,
    duration: 2,
    opacity: 0.1,
    scale: 0.3
})
gsap.from("#footer", {
    duration: 2,
    y: 200,
    scrollTrigger: ".snowy"
})
gsap.from("#copyright", {
    duration: 2,
    y: 200,
    scrollTrigger: "#footer"
})

