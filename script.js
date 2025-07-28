// Animated hero typewriter/rotator effect
const typewriterPhrases = [
  "Cybersecurity Enthusiast",
  "Full-Stack Developer",
  "React & JS Specialist",
  "UI/UX Innovator"
];
let typeIdx = 0;
const typeTarget = document.querySelector(".typewriter");
function rotateType() {
  if (typeTarget) {
    typeTarget.textContent = typewriterPhrases[typeIdx];
    typeIdx = (typeIdx + 1) % typewriterPhrases.length;
  }
}
rotateType();
setInterval(rotateType, 1800);

// Swiper for horizontal project slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.15,
  spaceBetween: 45,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    800: {slidesPerView: 2.1},
    1200: {slidesPerView: 2.8}
  }
});

// GSAP glass panel animation on scroll
gsap.utils.toArray('.glass-panel').forEach(function(panel, idx){
  gsap.from(panel, {
    opacity: 0, y: 70, duration: 0.8, delay: idx*0.12,
    scrollTrigger: {trigger: panel, start:"top 90%"}
  });
});

// Custom animated cursor
const cursor = document.querySelector('.custom-cursor');
window.addEventListener('mousemove', (e)=>{
  cursor.style.left = e.clientX+'px';
  cursor.style.top = e.clientY+'px';
});
document.querySelectorAll('a, .skills-list span, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.opacity = 0.92;
    cursor.style.width = '54px';
    cursor.style.height = '54px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0.45;
    cursor.style.width = '34px';
    cursor.style.height = '34px';
  });
});

