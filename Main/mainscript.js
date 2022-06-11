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

/////////////
//Functions//
/////////////

//Functions for adding values//
const attack = () => {
    pokeNature.hardy += 1;
    pokeNature.lonely += 1;
    pokeNature.adamant += 1;
    pokeNature.naughty += 1;
    pokeNature.brave += 1;
}

const defense = () => {
    pokeNature.bold += 1;
    pokeNature.docile += 1;
    pokeNature.impish += 1;
    pokeNature.lax += 1;
    pokeNature.relaxed += 1;
}

const spAttack = () => {
    pokeNature.modest += 1;
    pokeNature.mild += 1;
    pokeNature.bashful += 1;
    pokeNature.rash += 1;
    pokeNature.quiet += 1;
}

const spDefense = () => {
    pokeNature.calm += 1;
    pokeNature.gentle += 1;
    pokeNature.careful += 1;
    pokeNature.quirky += 1;
    pokeNature.sassy += 1;
}

const speed = () => {
    pokeNature.timid += 1;
    pokeNature.hasty += 1;
    pokeNature.jolly += 1;
    pokeNature.naive += 1;
    pokeNature.serious += 1;
}



///////////////////
//Question/Answer//
///////////////////

// result: function (ansNum) {
//     if (ansNum = 1){

//     }
//     if (ansNum = 2){

//     }
//     if (ansNum = 3){

//     }
//     if (ansNum = 4){
        
//     }
// }

const mainQuestion = 
    [{
        question: "How many cats do you own?",
        answer1: "One",
        answer2: "Two",
        answer3: "Four",
        answer4: "I don't have any cats",
        result: function (ansNum) {
            if (ansNum = 1){
                attack();
                pokeNature.docile += 2;
                pokeNature.quiet += 2;
            }
            if (ansNum = 2){
                defense();
                pokeNature.docile += 2;
                pokeNature.impish += 2;
                pokeNature.lax += 2;
            }
            if (ansNum = 3){
                spAttack();
                pokeNature.modest += 2;
                pokeNature.bashful += 2;
                pokeNature.rash += 2;
            }
            if (ansNum = 4){
                spDefense();
                speed();
            }
        }
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        result: function (ansNum) {
            if (ansNum = 1){

            }
            if (ansNum = 2){

            }
            if (ansNum = 3){

            }
            if (ansNum = 4){
                
            }
        }
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    }
]


console.log(mainQuestion[0].question);

///////
//DOM//
///////

///DOM Functions///

const questionGen = () => {
    ans1.innerHTML = mainQuestion[0].answer1;
    ans2.innerHTML = mainQuestion[0].answer2;
    ans3.innerHTML = mainQuestion[0].answer3;
    ans4.innerHTML = mainQuestion[0].answer4;
}

////DOM Declarations////

//DOM Inputs//

const firstName = document.getElementById('fname');
const birthDay = document.getElementById('birthday');

//DOM Pages//

const frontpage = document.getElementById('mainpage');
const mainContent = document.getElementById('questionpage');
const resultPage = document.getElementById('resultpage');

//DOM Buttons//

const startButton = document.getElementById('startQ');

const ans1 = document.getElementById('answer1');
const ans2 = document.getElementById('answer2');
const ans3 = document.getElementById('answer3');
const ans4 = document.getElementById('answer4');

////DOM Actions////

startButton.addEventListener('click', () => {
    pokeNature = pokeNatureBase;
    questionGen();
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