document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("menu-open");
    const closeBtn = document.getElementById("menu-close");
    const menu = document.getElementById("mobile-menu");
  
    if (!openBtn || !closeBtn || !menu) return;
  
    openBtn.addEventListener("click", () => {
      menu.classList.add("is-open");
    });
  
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("is-open");
    });
  });
  