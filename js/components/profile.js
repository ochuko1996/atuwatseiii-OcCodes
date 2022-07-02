// profile of oba
import { profileOfOba } from "../crest-list.js";
const crestCardContainer = document.querySelector('.crest-card-container')
const input = document.getElementById('input')


// display of the profile
    let mapped = profileOfOba.map(profile=>{
            crestCardContainer.innerHTML += `
            <div class="row crest-card mb-10" data-id="${profile.id}" id="${profile.id}">
            <div class="col-4 no-padding">
            <img style="padding-right:5px;" width="120px" height="120px" src="${profile.image}" alt="">
            </div>
            <div class="col-8">
                <h5 style="font-size: 1rem;" class="serial">
                ${profile.name}
                </h5>
                <p style="font-size:.75rem;padding-top: 5px;">
                ${profile.span}
                </p>
                <h5 style="font-size:.8rem; padding-top: 12px">
                    Reign
                </h5>
                <div class="row ">
                    <p class="col-6 " style="font-size: .7rem;">
                       <b>Start:</b> ${profile.start} 
                       </p>
                    <p class="col-6 " style="font-size: .7rem;">
                        <b>End:</b> ${profile.end}
                        </p>
                        </div>
                        </div>
        </div>
        `
        })
// input.addEventListener('input',(e)=>{
//     const keyInputed = input.value
//     const filterText = keyInputed
//     const filterData = profileOfOba.filter(data=>data.name.toLowerCase().includes(filterText.toLowerCase()))
//     // console.log(filterData);
//     filterData.map(profile=>{
//         crestCardContainer.innerHTML = `
//         <div class="row crest-card mb-10" data-id="${profile.id}" id="${profile.id}">
//             <div class="col-4 no-padding">
//                 <img style="padding-right:5px;" width="120px" height="120px" src="${profile.image}" alt="">
//             </div>
//             <div class="col-8">
//                 <h5 style="font-size: 1rem;" class="serial">
//                     ${profile.name}
//                 </h5>
//                 <p style="font-size:.75rem;padding-top: 5px;">
//                     ${profile.span}
//                 </p>
//                 <h5 style="font-size:.8rem; padding-top: 12px">
//                     Reign
//                 </h5>
//                 <div class="row ">
//                     <p class="col-6 " style="font-size: .7rem;">
//                         <b>Start:</b> ${profile.start} 
//                     </p>
//                     <p class="col-6 " style="font-size: .7rem;">
//                         <b>End:</b> ${profile.end}
//                     </p>
//                 </div>
//             </div>
//         </div>
//         `
//     })
//     console.log(filterData);
//     e.preventDefault()
// })

const crestCard = document.querySelectorAll('.crest-card')
const clickableCard = crestCard
const main = document.querySelector('.ginuwa-main-dp')
const smDp = document.querySelector('.sm-dp-profile')


clickableCard.forEach( card=>{
    card.addEventListener('click', e =>{
        const crestTarget = e.currentTarget.dataset.id
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
            <div class="ginuwa-crest-display" data-id="${profileOfOba[idealCard]}">
            <div class="main-dp">
                <img src="${profileOfOba[idealCard].image}" alt="" width="140px" height="140px">
            </div>
            <h5>
                ${profileOfOba[idealCard].name}   
            </h5>
            <p style="font-size:.75rem;padding-top: 5px;">
                ${profileOfOba[idealCard].span}
            </p>
            <h5 style="font-size:.8rem; padding-top: 12px">
                Reign
            </h5>
            <div class="row ">
                <p class="col-6 " style="font-size: .7rem;">
                   <b>Start:</b> ${profileOfOba[idealCard].start} 
                </p>
                <p class="col-6 " style="font-size: .7rem;">
                    <b>End:</b> ${profileOfOba[idealCard].end}
                </p>
                <p style="font-size: .75rem;padding-top: 10px;">
                    ${profileOfOba[idealCard].note} 
                </p>
            </div>
        </div>
            `
}
function smallScreanDp(idealCard) {
    smDp.innerHTML = `
    <div class="sm-dp-container d-flex align-items-center" data-id="${profileOfOba[idealCard]}>
    <div class="d-flex align-items-center">
            <div class="fw-bold bk" style="font-size: 1.2rem ;">
                
                &#8592
            </div>
            <h5  style="font-size: 14.4px; padding-left:10px">
            ${profileOfOba[idealCard].name}  
            </h5>
    </div>
    <hr>
    <div class="ginuwa-crest-display">
        <div class="main-dp">
            <img src="${profileOfOba[idealCard].image}" alt="" width="140px" height="140px">
        </div>
        <h5 style="font-size: 12.8px; padding-top: 12px;">
            Lifespan      
        </h5>
        <p style="font-size:.75rem;padding-top: 5px;">
        ${profileOfOba[idealCard].span}
        </p>
        <h5 style="font-size:.8rem; padding-top: 12px">
            Reign
        </h5>
        <div class="row ">
            <p class="col-6 " style="font-size: .7rem;">
               <b>Start:</b> ${profileOfOba[idealCard].start} 
            </p>
            <p class="col-6 " style="font-size: .7rem;">
                <b>End:</b> ${profileOfOba[idealCard].end}
            </p>
            <h5 style="font-size: 12.8px; padding-top: 12px;">
                Family      
            </h5>
            <p style="font-size: .75rem; padding-top: 5px;">
                ${profileOfOba[idealCard].family}
            </p>
            <p style="font-size: .75rem;padding-top: 10px;">
            ${profileOfOba[idealCard].note} 
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

