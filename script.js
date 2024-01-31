function togglebtn() {
  const html = document.documentElement

  if (html.classList.contains("light-mode")) {
    html.classList.remove("light-mode")
  } else {
    html.classList.add("light-mode")
  }

  if (html.classList.contains("light-mode")) {
    const img = document.querySelector(".avatar img")
    img.src = "./assets/avatar-light.png"
  } else {
    const img = document.querySelector(".avatar img")
    img.src = "./assets/avatar.png"
  }

  // html.classList.toggle('light-mode');
}
