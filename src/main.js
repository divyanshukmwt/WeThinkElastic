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
    translateY:1,
    duration:0.8,
    stagger : 0.1,
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
gsap.to(".page3text",{
  translateY:0,
  scrollTrigger:"#page3text",
  stagger:0.2,
  duration:0.9,
  ease:"power1.Out"
})

ScrollTrigger.defaults({
  anticipatePin: 1
});

gsap.to("#page7 h1", {
  transform: "translate(-155%)",
  scrollTrigger: {
    trigger: "#page7",
    start: "top -15%",
    end: "+=250%",
    scrub: 1,
    pin: true,
  }
});

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
const cursorDivs = document.querySelectorAll('.cursordiv');

cursorDivs.forEach(div => {
  const cursor = div.querySelector('.cursor');

  cursor.classList.add('hidden');

  div.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden');
  });

  div.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden');
  });

  div.addEventListener('mousemove', (e) => {
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = 25;
    const offsetY = 25;

    cursor.style.left = `${x - offsetX}px`;
    cursor.style.top = `${y - offsetY}px`;
  });
});
gsap.to(".page4Svg2",{
  rotate:360,
  repeat:-1,
  duration:10,
  ease:"none",
})

let lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
  const navBar = document.getElementById('nav');
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {

    navBar.style.transform = 'translateY(-100%)';
  } else {
    navBar.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});

