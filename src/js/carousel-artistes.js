document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("artists-track");
    const prev = document.getElementById("artists-prev");
    const next = document.getElementById("artists-next");
    const viewport = document.getElementById("artists-viewport");
    if (!track || !prev || !next || !viewport) return;
  
    // Données fictives 
    const artists = [
      {
        name: "Élise Montval",
        role: "Piano",
        date: "Ven. 29 août · 17h00",
        scene: "Scène Vauban",
        img: "assets/img/placeholder-artist.webp"
      },
      {
        name: "Clara Weiss",
        role: "Violon",
        date: "Sam. 30 août · 18h00",
        scene: "Scène Vauban",
        img: "assets/img/placeholder-artist.webp"
      },
      {
        name: "Luca Ferreti",
        role: "Ténor",
        date: "Jeu. 28 août · 21h30",
        scene: "Scène Vauban",
        img: "assets/img/placeholder-artist.webp"
      },
      {
        name: "Sofia Alvarez",
        role: "Soprano",
        date: "Jeu. 28 août · 21h30",
        scene: "Scène Vauban",
        img: "assets/img/placeholder-artist.webp"
      }
    ];
  
    // Injection des cards dans le track
    track.innerHTML = artists.map(a => `
      <article class="artist-card">
        <img class="artist-card__img" src="${a.img}" alt="${a.name}">
        <div class="artist-card__body">
          <h3 class="h3">${a.name}</h3>
          <p class="p muted">${a.role}</p>
          <p class="p muted">${a.date} · ${a.scene}</p>
        </div>
      </article>
    `).join("");
  
    let index = 0;
    const cardWidth = 232; // approx : carte + gap
  
    function update() {
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  
    next.addEventListener("click", () => {
      index = Math.min(index + 1, track.children.length - 1);
      update();
    });
  
    prev.addEventListener("click", () => {
      index = Math.max(index - 1, 0);
      update();
    });
  
    // Swipe mobile
    let startX = 0;
    let currentX = 0;
    let dragging = false;
  
    viewport.addEventListener("touchstart", (e) => {
      dragging = true;
      startX = e.touches[0].clientX;
      currentX = startX;
    }, { passive: true });
  
    viewport.addEventListener("touchmove", (e) => {
      if (!dragging) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });
  
    viewport.addEventListener("touchend", () => {
      if (!dragging) return;
  
      const diff = currentX - startX;
      if (diff < -40) index = Math.min(index + 1, track.children.length - 1);
      if (diff > 40) index = Math.max(index - 1, 0);
  
      update();
      dragging = false;
    });
  });
  