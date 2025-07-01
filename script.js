const text = "ABBURI PREMCHAND";

function typeWriter(text, i, speed) {
    if (i < text.length) {
        document.getElementsByClassName('title')[0].innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i, speed), speed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  typeWriter(text, 0, 100);
});



const animatedSections = document.querySelectorAll('.heading, .about-wrap, .edu-card, .project-card, .s-card, .certificate-card, .event-card, .contact');

const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      animateObserver.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.4
});

animatedSections.forEach(section => {
  animateObserver.observe(section);
});



const navLinks = document.querySelectorAll('.nav-links a');

const sectionIds = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Certifications', 'Hackathons', 'Contact'];
const sections = sectionIds.map(id => document.getElementById(id));

const navHighlightObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      navLinks.forEach(link => {
        link.classList.toggle('active-nav', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  threshold: 0.8
});

sections.forEach(section => {
  if (section) navHighlightObserver.observe(section);
});

const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');
const closeIcon = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
