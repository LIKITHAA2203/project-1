function checkPassword() {
  const password = document.getElementById("password").value;
  const lockScreen = document.getElementById("lockScreen");
  const messageScreen = document.getElementById("messageScreen");
  const error = document.getElementById("error");
  const music = document.getElementById("bgMusic");
  const overlay = document.getElementById("transitionOverlay");

  if (password == "LADDU") { // <-- set your password here
    // Show heart transition
    overlay.classList.add("show");

    setTimeout(() => {
      overlay.classList.remove("show");
      lockScreen.classList.add("hidden");
      messageScreen.classList.remove("hidden");
      music.play();
    }, 1500); // transition duration
  } else {
    error.textContent = "Wrong password 💔";
  }
}

// Hearts falling
function startHearts() {
  const colors = ["❤️","💖","💕","💘","💓"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = Math.random() * 90 + "%";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 500);
}

// Sparkles falling
function startSparkles() {
  const sparkles = ["✨","🌟","💫"];
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.left = Math.random() * 90 + "%";
    sparkle.style.fontSize = (10 + Math.random() * 15) + "px";
    sparkle.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 5000);
  }, 400);
}

// Start animations immediately
startHearts();
startSparkles();


