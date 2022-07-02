// search filter
import { profileOfOba    } from "../crest-list.js";
const input = document.getElementById('input').value

// const filterText = "olu"
// const filterData = profileOfOba.filter(data=>data.name.toLowerCase().includes(filterText.toLowerCase()))
// console.log(filterData);

const alfa = "CHIGOZIE"

console.log(alfa.includes("c"));

if (alfa.toLowerCase().includes('c')) {
    console.log(alfa);
}else{
    console.log("");
}