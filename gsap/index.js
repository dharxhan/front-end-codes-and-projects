gsap.registerPlugin(ScrollTrigger);

gsap.from(".title",{x: -500,duration:10, opacity:0});
gsap.from(".p1",{y: 500,duration:10, opacity:0});

gsap.fromTo(
    "#pepsi",
    {opacity:0 , duration: 10 , rotation:0};
    {opacity:0.9, durationL: 10 , rotation: 360};
);

gsap.fromTo(
    "#fanta",
    {opacity:0 , rotation:0};
    {
        opacity:0.9,
        duration:10,
        rotation: 375,
        ScrollTrigger:{
            trigger: "#fanta",
            start:"top bottom",
            end: "bottom top",
            scrub:true,
            markers: true,
        },
    }
);