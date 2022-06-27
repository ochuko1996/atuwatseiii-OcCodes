// Crest slider
let counter = 0;
import { crests } from "../crest-list.js"
const crestContainer = document.querySelector('.badge-container')
const btns = document.querySelectorAll('.crest-btn')
// console.log(crestContainer);

crestContainer.style.background = `url(${crests[counter]})`
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const target = e.currentTarget
        if (target.classList.contains('next')) {
            crestContainer.style.backgroundImage = `url(${crests[counter++]})`
        }
        if (target.classList.contains('prev')) {
            crestContainer.style.backgroundImage = `url(${crests[counter--]})`
        }
        logic()
    })
})

function logic() {
    if (counter > crests.length - 1) {
        counter = 0
    }

    if (counter < 0) {
        counter = crests.length - 1
    }
}


const autoPlayBg = setInterval(()=>{
    crestContainer.style.background = `url(${crests[counter++]})`
    logic()
},5000)