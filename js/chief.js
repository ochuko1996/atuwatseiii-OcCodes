import { councilOfChief } from "./crest-list.js";
const chiefContainer = document.querySelector('.chief-container')
councilOfChief.map(chief=>{
    chiefContainer.innerHTML += `
    <div class="chief-card row" data-id="${chief.id}" id="${chief.id}" >
        <div class="col-3">
            <img src="../assets/traditional_council.c46b6481ee3834488048.jpg" alt="" height="70px" width="70px">

        </div>
        <div class="col-8">
            <h5 style="font-size: 0.9rem; font-weight: bold; padding-top: 10px;">
                ${chief.name}  
            </h5>
            <p style="font-size: 0.8rem; font-weight: 600; padding-top: 10px;">
                ${chief.title}  
            </p>
        </div>

    </div>
    `
})
const crestCard = document.querySelectorAll('.chief-card')
const clickableCard = crestCard
const main = document.querySelector('.ginuwa-main-dp')
const smDp = document.querySelector('.sm-dp-profile')


clickableCard.forEach( card=>{
    card.addEventListener('click', e =>{
        const crestTarget = e.currentTarget.dataset.id
        console.log(crestTarget);
        const cardId = e.currentTarget.id
        const idealCard =  cardId - 1
        smDp.style.display = "flex"
        if( crestTarget  ){
            mainScreenRight(idealCard)
           smallScreanDp(idealCard)
        }
     })
})

function mainScreenRight(idealCard) {
    main.innerHTML = `
    <div class="ginuwa-crest-display" id="${councilOfChief[idealCard]}">
    <div class="main-dp" style="padding-bottom:5px ;">
        <img src="../assets/traditional_council.c46b6481ee3834488048.jpg" alt="" width="100px" height="100px">
    </div>
    <h5 style="font-size: 20px; font-weight: bold;">
    ${councilOfChief[idealCard].name}
    </h5>
    <p style="font-size: 12px;padding-top: 10px;">
        <b>Title</b> ${councilOfChief[idealCard].title}
    </p>
    <p style="font-size: 12px;padding-top: 10px;">
        <b>Appellation</b> ${councilOfChief[idealCard].appellation}
    </p>
    </div>
            `
}
function smallScreanDp(idealCard) {
    smDp.innerHTML = `
    <div class="sm-dp-container d-flex align-items-center" data-id="${councilOfChief[idealCard]}>
    <div class="d-flex align-items-center">
            <div class="fw-bold bk" style="font-size: 1.2rem ;">
                
                &#8592
            </div>
            <h5  style="font-size: 14.4px; padding-left:10px">
            ${councilOfChief[idealCard].name}  
            </h5>
    </div>
    <hr>
    <div class="ginuwa-crest-display">
        <h5 style="font-size: 1.5rem; font-weight: bold; padding-top: 10px;">
            ${councilOfChief[idealCard].name}  
        </h5>
        <p style="font-size: 0.9rem; ; padding-top: 10px;">
           <b>Title:</b> ${councilOfChief[idealCard].title}  
        </p>
        <p style="font-size: 0.9rem; padding-top: 10px;">
            <b>Applellation:</b> ${councilOfChief[idealCard].appellation}  
        </p>
        
    
        </div>
    </div>
    
    </div>
    
    `
    const btnBk = document.querySelector('.bk')
    const returnBtn = btnBk 
    returnBtn.addEventListener('click',()=>{
        smDp.style.display = "none"
    })
}