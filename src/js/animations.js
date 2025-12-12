document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
      ".section, .card, .artist-card, .timeline__item"
    );
  
    // État initial (avant animation)
    animatedElements.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );
  
    animatedElements.forEach(el => observer.observe(el));
  });
  