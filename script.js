function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const error = document.getElementById("error");
  const lockScreen = document.getElementById("lockScreen");
  const messageScreen = document.getElementById("messageScreen");
  const music = document.getElementById("bgMusic");

  if (passwordInput === "LADDU") {
    lockScreen.classList.add("hidden");
    messageScreen.classList.remove("hidden");
    music.play();
  } else {
    error.innerText = "WRONG PASSWORD 💔";
  }
}



