const navIcon = document.querySelector('.nav-icon')
const redNav = document.querySelector('.nav-two')

navIcon.addEventListener('click', ()=>{
    navIcon.classList.toggle('show-icon')
    redNav.classList.toggle('show-red-nav')
    // console.log('hi');
})

// dropdown navigation
const hamburger = document.querySelector('.hamburger')
const bar = document.querySelector('.bar')
const navDropdown = document.querySelector('.dropdown-menu')

hamburger.addEventListener('click',()=>{
    navDropdown.classList.add('show-drop')
    // console.log('hi');
})
bar.addEventListener('click',()=>{
    navDropdown.classList.remove('show-drop')
})

//  preloader
const preloader = document.querySelector('.preloader-container')
window.addEventListener('load',()=>{
    // setInterval(()=>{
        preloader.style.display = "none"

    // },2000)
})



