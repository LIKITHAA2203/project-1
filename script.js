function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  const music = document.getElementById("bgMusic");

  if (pass === "DUDU MY ONE AND ONLY LOVE") {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("messageScreen").classList.remove("hidden");
    music.play();
  } else {
    error.innerText = "WRONG PASSWORD 😢";
  }
}


