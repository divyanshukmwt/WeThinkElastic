import gsap from "gsap";
import "./style.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import 'remixicon/fonts/remixicon.css'

gsap.registerPlugin(ScrollTrigger);

function loader() {
  const loaderimg = document.querySelectorAll(".loaderImg");
  const tl = gsap.timeline();

  loaderimg.forEach((img) => {
    tl.to(img, {
      opacity: 1,
      duration: 0.1,
    }).to(img, {
      opacity: 0,
      duration: 0.1,
    });
  });

  tl.to("#loader", {
    height: 0,
    duration: 0.8,
    ease: "power2.inOut",
  })

  .set("#loader", {
    display: "none"
  });
  tl.from(".hello", {
    height :0,
    duration:0.4,
    stagger : 0.03,
ease: "sine.out",
}, "-=0.5")
}
// loader();
gsap.to("#video", {
  scale:1,
  scrollTrigger: {
    trigger: "#page2",
    scroller:"body",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  }
});
gsap.to(".page3text",{
  translateY:0,
  scrollTrigger:"#page3text",
  stagger:0.2,
  duration:0.9,
  ease:"power1.Out"
})
// gsap.to("#page7 h1", {
//   x: "-65%",
//   scrollTrigger: {
//     trigger: "#page7",
//     scroller: "body",
//     start: "top 0%",
//     end: "+=100%",
//     scrub: 2,
//     pin: true,
//     pinSpacing: false,
//   },
// });
gsap.to(".page10text h2", {
  translateY:0,
  scrollTrigger:{
    trigger:"#page10",
    scroller:"body",
    start:"top 50%",
    end:"top 25%",
    scrub:2,
  }
})
