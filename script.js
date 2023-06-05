function toggleMode() {
  const html = document.documentElement
html.classList.toggle("light")
//pegar a tag img
const img = document.querySelector('#profile img')

//substituir a img
if(html.classList.contains('light')) {
  //se tiver light mode, adicionar a img light
  img.setAttribute('src','./assets/Avatar-light.png')
}
else
// se tiver sem lightmode, manter o avatar dark
img.setAttribute('src','./assets/avatar-dark.png')


}
