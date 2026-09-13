// ===============================
// BIRTHDAY WEBSITE EFFECTS
// ===============================

// Final-page birthday confetti
const confettiContainer = document.querySelector(".confetti-container");

if (confettiContainer) {
    const symbols = ["✦", "✧", "♡", "🎂", "✨", "💙", "🎉"];

    for (let i = 0; i < 45; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.fontSize = Math.random() * 14 + 12 + "px";
        piece.style.animationDuration = Math.random() * 3 + 3 + "s";
        piece.style.animationDelay = Math.random() * 2 + "s";
        confettiContainer.appendChild(piece);
    }
}

// Gallery click-to-zoom
const photos = document.querySelectorAll(".memory-card img");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        photo.classList.toggle("zoomed");
    });
});

// Small reveal effect while scrolling
const revealItems = document.querySelectorAll(".memory-card, .message-card, .photo-frame");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.12 });

revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(item);
});
