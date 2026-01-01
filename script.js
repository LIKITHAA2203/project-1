function checkPassword() {
    const pwd = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (pwd === "LADDU") {
        document.getElementById("page1").classList.add("hidden");
        document.getElementById("page2").classList.remove("hidden");
        music.play();
    } else {
        error.textContent = "❌ Wrong password";
        error.style.color = "red";
    }
}

/* SPARKLES & HEARTS */
const effects = document.getElementById("effects");
const symbols = ["💖", "✨", "💗", "💫", "❤️"];

setInterval(() => {
    const span = document.createElement("span");
    span.className = "effect";
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (Math.random() * 3 + 3) + "s";
    effects.appendChild(span);

    setTimeout(() => span.remove(), 6000);
}, 250);

 
