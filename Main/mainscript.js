///////////
//OBJECTS//
///////////

const pokeNatureBase = {
    "adamant": 0,
    "bashful": 0,
    "bold": 0,
    "brave": 0,
    "calm": 0,
    "careful": 0,
    "docile": 0,
    "gentle": 0,
    "hardy": 0,
    "hasty": 0,
    "impish": 0,
    "jolly": 0,
    "lax": 0,
    "lonely": 0,
    "mild": 0,
    "modest": 0,
    "naive": 0,
    "naughty": 0,
    "quiet": 0,
    "quirky": 0,
    "rash": 0,
    "relaxed": 0,
    "sassy": 0,
    "serious": 0,
    "timid": 0
}

let pokeNature = {}

///////
//DOM//
///////

////DOM Declarations////

//DOM Inputs//

const firstName = document.getElementById('fname');
const birthDay = document.getElementById('birthday');

//DOM Declarations//

const frontpage = document.getElementById('mainpage');
const mainContent = document.getElementById('questionpage')

//DOM Buttons//

const startButton = document.getElementById('startQ');

const ans1 = document.getElementById('answer1');
const ans2 = document.getElementById('answer2');
const ans3 = document.getElementById('answer3');
const ans4 = document.getElementById('answer4');

////DOM Actions////

startButton.addEventListener('click', () => {
    pokeNature = pokeNatureBase;
    frontpage.style.display = 'none';
    mainContent.style.display = 'block';

})
















// ///////////////////////////// Functional fetch URL # disabled by courtesy
// let url = 'https://pokeapi.co/api/v2/generation/3/';
// let url2 = 'https://pokeapi.co/api/v2/pokemon/1/'
// let array1 = [];

// fetch(url)
//     .then(result =>{
//         return result.json()
//     })
//     .then(result =>{
//         console.log(result);
//         result.pokemon_species.forEach(element => {
//                 array1.push(element)})
//     })

// // fetch(url2)
// //     .then(result =>{
// //         return result.json()
// //     })
// //     .then(result =>{
// //         console.log(result);
// //     })

// // console.log(array1);
// // ///////////////////////////////////