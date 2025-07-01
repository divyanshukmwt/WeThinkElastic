import gsap from "gsap";
import "./style.css";
import ScrollTrigger from "gsap/ScrollTrigger";

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
loader();
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