// Typed.js for animated hero headline
document.addEventListener('DOMContentLoaded', function(){
  // eslint-disable-next-line no-undef
  new Typed('#typewriter', {
    strings: [
      "Hi, I’m Himanshu Verma.",
      "Cybersecurity Enthusiast.",
      "Aspiring Full-Stack Developer.",
      "Node.js & DevOps Learner."
    ],
    typeSpeed: 45,
    backSpeed: 27,
    backDelay: 1800,
    loop: true
  });
  // AOS for scroll animations
  // eslint-disable-next-line no-undef
  AOS.init({ duration: 800, once: true });
});

