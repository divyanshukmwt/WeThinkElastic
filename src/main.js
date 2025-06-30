import gsap from "gsap";
import "./style.css";

const loaderimg = document.querySelectorAll(".loaderImg");
const tl = gsap.timeline({repeat : -1});

loaderimg.forEach((img) => {
  tl.to(img, {
    opacity: 1,
    duration: 0.1,
  }).to(img, {
    opacity: 0,
    duration :0.1,
  });
});
