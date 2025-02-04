document.addEventListener('DOMContentLoaded', function(){
  /* === Mobile Navigation === */
  const mobileMenu = document.getElementById('mobileMenu');
  const mainNav = document.querySelector('nav ul');
  mobileMenu.addEventListener('click', function(){
    mainNav.classList.toggle('active');
  });

  /* === Slider Funktionalität === */
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const nextSlideBtn = document.getElementById('nextSlide');
  const prevSlideBtn = document.getElementById('prevSlide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if(i === index) {
        slide.classList.add('active');
      }
    });
  }

  nextSlideBtn.addEventListener('click', function(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevSlideBtn.addEventListener('click', function(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Automatischer Slide-Wechsel alle 5 Sekunden
  setInterval(function(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  /* === Kontaktformular-Verarbeitung === */
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    // Hier könnte ein AJAX-Request stehen. Zur Simulation zeigen wir eine Erfolgsmeldung.
    formFeedback.textContent = "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze.";
    contactForm.reset();
  });

  /* === Scroll-Reveal Effekt === */
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  sections.forEach(section => {
    observer.observe(section);
  });
});
