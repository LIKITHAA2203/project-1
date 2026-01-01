function checkPassword() {
  const password = document.getElementById("password").value;
  const lockScreen = document.getElementById("lockScreen");
  const messageScreen = document.getElementById("messageScreen");
  const error = document.getElementById("error");
  const music = document.getElementById("bgMusic");

  if (password === "LADDU") { // <-- set your password here
    lockScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");
    music.play();
    startHearts();
    startSparkles();
  } else {
    error.textContent = "Wrong password 💔";
  }
}

// Generate endless hearts
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

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 500);
}

// Generate endless sparkles
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

    setTimeout(() => {
      sparkle.remove();
    }, 5000);
  }, 400);
}




