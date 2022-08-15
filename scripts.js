const icon = document.getElementById('icon')
const projectsBoton = document.getElementById('projectsBoton')
const cvBoton = document.getElementById('cvBoton')
const card = document.querySelector('.card');
const dark = `#37474F`

//Dark Mode on click
icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme')
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'public/images/dark.svg'
    cvBoton.setAttribute("fill", "white")
    const iconos = document.querySelectorAll('.tecnologie')
    const download = document.querySelector('.download')
    download.setAttribute("fill", "white")
    iconos.forEach(icono => {
      icono.setAttribute("fill", "white")
    })
    localStorage.setItem('darkMode', 'true')
  } else {
    icon.src = 'public/images/light.svg'
    cvBoton.setAttribute("fill", dark)
    const iconos = document.querySelectorAll('.tecnologie')
    const download = document.querySelector('.download')
    download.setAttribute("fill", dark)
    iconos.forEach(icono => {
      icono.setAttribute("fill", dark)
    })
    localStorage.setItem('darkMode', 'false')
  }
})

//Dark Mode on load
window.onload = function () {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.toggle('dark-theme')
    icon.src = 'public/images/dark.svg'
    cvBoton.setAttribute("fill", "white")
    const iconos = document.querySelectorAll('.tecnologie')
    const download = document.querySelector('.download')
    download.setAttribute("fill", "white")
    iconos.forEach(icono => {
      icono.setAttribute("fill", "white")
    })
    localStorage.setItem('darkMode', 'true')
  } else {
    icon.src = 'public/images/light.svg'
    cvBoton.setAttribute("fill", dark)
    const iconos = document.querySelectorAll('.tecnologie')
    const download = document.querySelector('.download')
    download.setAttribute("fill", dark)
    iconos.forEach(icono => {
      icono.setAttribute("fill", dark)
    })
    localStorage.setItem('darkMode', 'false')
  }
}


const gridC = document.getElementById('gridC')
const stack = document.getElementById('stack')
const tecnologies = document.getElementById('tecnologies')
const lenguage = document.getElementById('lenguage')

//Flip project div 
projectsBoton.addEventListener('click', async function () {
  card.classList.toggle('is-flipped')
  await new Promise(res => setTimeout(res, 1200));
  gridC.style.visibility = 'hidden'
  stack.style.visibility = 'hidden'
  tecnologies.style.visibility = 'hidden'
  lenguage.style.visibility = 'hidden'
  
})
cvBoton.addEventListener('click', function () {
  gridC.style.visibility = 'visible'
  stack.style.visibility = 'visible'
  tecnologies.style.visibility = 'visible'
  lenguage.style.visibility = 'visible'
  card.classList.toggle('is-flipped');
})
