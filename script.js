function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light') //Cores de Fundo//



  const img = document.querySelector('#profile img')
  if(html.classList.contains('light')) {
    img.setAttribute('src',"./Assets/AvatarI.jpg")
  } else {
    img.setAttribute('src','./Assets/AvatarIDark.jpg')
  }
}