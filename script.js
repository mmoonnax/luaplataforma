function toggleMode() {
  const html = document.documentElement

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }

  html.classList.toggle("light")
  //Pegar a tag imagem
  const img = document.querySelector("#profile img")
  // Se estiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    ~img.setAttribute("src", "./arquivos.luana/avatar.light.png")
  }
  // se tiver sem light mode, manter a imagem normal
  else {
    img.setAttribute("src", "./arquivos.luana/avatar.png")
  }
}
