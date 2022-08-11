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

//Flip project div 
projectsBoton.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});
cvBoton.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});