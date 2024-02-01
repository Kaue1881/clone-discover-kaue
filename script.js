// quando apertar no switch button
function togglebtn() {
  const html = document.documentElement

  // trocar light para dark mode
  if (html.classList.contains("light-mode")) {
    html.classList.remove("light-mode")
  } else {
    html.classList.add("light-mode")
  }
  // html.classList.toggle('light-mode');

  // trocar imagem de avatar light/dark
  if (html.classList.contains("light-mode")) {
    const img = document.querySelector(".avatar img")
    img.src = "./assets/avatar-light.png"
  } else {
    const img = document.querySelector(".avatar img")
    img.src = "./assets/avatar.png"
  }
}
