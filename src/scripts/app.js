import { gsap } from "gsap";

// gsap.to(".box", { duration: 2, rotationY: 180, backgroundColor: "black", scale: 1.2});
// gsap.to(".circle", { duration: 2, scale: 2, backgroundColor: "green"});

// gsap.from(".circle", { duration: 2, x: 300 });

// gsap.fromTo(".circle", { x: 300 }, { x: 0, opacity: 0, duration: 3});

// gsap.set(".circle", { opacity: 0.5});

// gsap.to(".circle", { duration: 2, x: "+=300"});

// gsap.to(".circle", { duration: 2, x: "+=300", onComplete: secondeAnim});


// function secondeAnim(){
//     gsap.to(".circle", { duration: 1, y: "+=200"});
// }

// gsap.to(".circle", { duration: 2, x: "+=300", ease: "bounce"});

gsap.to(".line", { duration: 1, scale: 1, y: "-=20", opacity: 1, stagger: 0.3, ease: "back.out(1.7)", onComplete: endAnim});

function endAnim(){
    gsap.to(".title", { duration: 1, scale: 0, opacity: 0, delay: 1});
}