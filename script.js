function checkPassword() {
  const password = document.getElementById("password").value;
  const lockScreen = document.getElementById("lockScreen");
  const messageScreen = document.getElementById("messageScreen");
  const error = document.getElementById("error");
  const music = document.getElementById("bgMusic");

  if (password === "laddu19") { // <-- set your password here
    lockScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");
    music.play();
  } else {
    error.textContent = "Wrong password 💔";
  }
}




