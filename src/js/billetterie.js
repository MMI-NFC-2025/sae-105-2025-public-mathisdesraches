document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-billetterie");
    if (!btn) return;
  
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Billetterie fictive (projet SAE) : aucune page de billetterie n’est à créer 🙂");
    });
  });
  