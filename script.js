// quando apertar no switch button
function togglebtn() {
  const html = document.documentElement

  // trocar light para dark mode
  if (html.classList.contains("dark-mode")) {
    html.classList.remove("dark-mode")
  } else {
    html.classList.add("dark-mode")
  }
  // html.classList.toggle('light-mode');

  // trocar imagem de avatar light/dark
  // if (html.classList.contains("dark-mode")) {
  //   const img = document.querySelector(".avatar img")
  //   img.src = "./assets/avatar-light.jpg"
  // } else {
  //   const img = document.querySelector(".avatar img")
  //   img.src = "./assets/avatar.jpg"
  // }
}
