

//** SEARCH ALL DOCS FOR ##REMOVEME before submitting */

/////////
//FETCH//
/////////

const url = 'https://pokeapi.co/api/v2/pokemon/'

const callResult = () => {
    let newUrl = url + `${pokeVal}/`;
    fetch(newUrl)
        .then(result => {
            return result.json()
        })
        .then(result =>{
            console.log(result);
            result.abilities.forEach(element =>{
                pokeValAbility.push(element);
            })
            result.forms.forEach(element =>{
                pokeValForms.push(element);
            })
            // result.sprites.forEach(element =>{
            //     pokeValSprites.push(element);
            // })
            pokeValName.push(result.name);
            pokeValSprites.push(result['sprites']['front_default']);

        })
}

/////////////////
//Result Values//
/////////////////

let pokeValAbility = [];
let pokeValForms = [];
let pokeValName = [];
let pokeValSprites = [];

// let newName = document.createElement('h2');
// let newImage = document.createElement('img');
// let newAbility = document.createElement('p');



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

let availChoices = [];

let actualVal = 0;

let turn = 1;

let pokeVal;

/////////////
//Functions//
/////////////

const listGen = () => {
    for (i = 0; i < mainQuestion.length; i ++){
        availChoices.push(i);
    }
}

const questionRng = () => {
    let questionVal = Math.floor(Math.random() * availChoices.length);
    actualVal = availChoices[questionVal];
    availChoices.splice(questionVal, 1);
}

const endCheck = () => {
    if (turn >= 11){
        mainContent.style.display = 'none';
        resultPage.style.display = 'block';
        mainPageSum();
        callResult();
        setTimeout(()=>{resultPageGen()}, 3000);
    }
}

const resultPageGen = () => {
    let newName = document.createElement('h2');
    let newImage = document.createElement('img');
    let newAbility = document.createElement('p');

    newName.innerText = pokeValName;
    newImage.src = `${pokeValSprites}`;
    newAbility.innerText = pokeValAbility[0].ability.name;
    resultPage.append(newName);
    resultPage.append(newImage);
    resultPage.append(newAbility);
}

const mainPageSum = () =>{
    let firstVal = parseInt(firstName.value.length);
    let secondVal = parseInt(birthDay.value.length);
    pokeVal = firstVal + secondVal;
}

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

//Function for calling atk/def/spd/spa/spe//

const chosenAnswer = (val) => {
    if (val === '1'){
        attack();
    }
    if (val === '2'){
        defense();
    }
    if (val === '3'){
        spAttack();
    }
    if (val === '4'){
        spDefense();
    }
    if (val === '5'){
        speed();
    }
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

// {
//     question: "",
//     answer1: "",
//     answer2: "",
//     answer3: "",
//     answer4: "",
//     answer5: ""
// }

const mainQuestion = 
    [{
        question: "How many cats do you own?",
        answer1: "One",
        answer2: "Two",
        answer3: "Four",
        answer4: "I don't have any cats",
        answer5: "More of a bird person"
    },
    {
        question: "Walking through a forest you spot an ogre. You:",
        answer1: "Charge the ogre directly",
        answer2: "Approach slowly and observe it",
        answer3: "Sneak up from behind for an ambush",
        answer4: "Observe the ogre from a better vantage point",
        answer5: "Run away",
    },
    {
        question: "You encounter a lost child. You decide to:",
        answer1: "Shout, \"Did anyone lose this child?\"",
        answer2: "Talk to them and try to help",
        answer3: "Pick up the child and place at a police station",
        answer4: "Find a police officer",
        answer5: "Just leave them there"
    },
    {
        question: "Your little brother breaks your TV and films it for internet clout",
        answer1: "Snap the camera in half",
        answer2: "Tell your parents",
        answer3: "Delete the footage by any means necessary",
        answer4: "Throw the camera into the river",
        answer5: "Let it go. No point in engaging"
    },
    {
        question: "You find $100 on the street",
        answer1: "Buy yourself a nice dinner and save the rest",
        answer2: "Try to find who lost it and return the money",
        answer3: "Invest it in stocks",
        answer4: "Leave it where it is",
        answer5: "Tear it into pieces. Loose change is for the poor"
    },
    {
        question: "You win a vacation(?) with some caveats. It was for:",
        answer1: "2 week stay at Disney World but all of your drinks leak slightly",
        answer2: "1 week stay in a virtual world",
        answer3: "24 hours where the law does not apply to you",
        answer4: "Time travel to the past but you can only observe",
        answer5: "Ride a hot air ballon around the world"
    },
    {
        question: "Theres a zombie outbreak in the town to the east. You first:",
        answer1: "Contact your friends and family to make sure they're okay",
        answer2: "Gather people and form a defense force",
        answer3: "Dig a hole somewhere and hide",
        answer4: "Reinforce all entryways to your home and prepare to defend",
        answer5: "Drive to the next closest "
    },
    {
        question: "You open the front door to find an applie pie at your feet. You: ",
        answer1: "Throw it as far away as possible",
        answer2: "Eat it immediately no questions asked",
        answer3: "Move it to your neighbor's door",
        answer4: "Donate it to your local shelter",
        answer5: "Get inspired and order 5 apple pies from McDonalds"
    },
    {
        question: "One of the following is now apart of reality. You choose:",
        answer1: "The Dragonballs",
        answer2: "Hogwarts",
        answer3: "The World 2.0",
        answer4: "San Andreas",
        answer5: "The Force"
    },
    {
        question: "Which of the following would you want to try.",
        answer1: "A treestar",
        answer2: "Scooby Snacks",
        answer3: "Soylent Green",
        answer4: "Chef's Chocolate Salty Balls",
        answer5: "Lembas"
    },
    {
        question: "A mythical creature is impressed by you and offers one of the following as a companion.",
        answer1: "A Red Dragon",
        answer2: "A Space Lizard",
        answer3: "A Hydra",
        answer4: "A Chimera",
        answer5: "A Griffin"
    },
    {
        question: "You wake from a horrid nightmare to see ___ above you. It was: ",
        answer1: "Red",
        answer2: "Carl Wheezer",
        answer3: "Shaggy",
        answer4: "Ralof",
        answer5: "Legolas"
    }
]



///////
//DOM//
///////

///DOM Functions///

const questionGen = () => {
    questionRng();
    let i = actualVal;
    ans1.innerHTML = mainQuestion[i].answer1;
    ans2.innerHTML = mainQuestion[i].answer2;
    ans3.innerHTML = mainQuestion[i].answer3;
    ans4.innerHTML = mainQuestion[i].answer4;
    ans5.innerHTML = mainQuestion[i].answer5;
    questionAsked.innerHTML = mainQuestion[i].question;
}

////DOM Declarations////

//DOM Inputs//

const firstName = document.getElementById('fname');
const birthDay = document.getElementById('birthday');
const questionBox = document.getElementById('questionHolder');

//DOM Pages//

const frontpage = document.getElementById('mainpage');
const mainContent = document.getElementById('questionpage');
const resultPage = document.getElementById('resultpage');
const questHead = document.getElementById('questionHead');

//DOM Text//

const questionAsked = document.getElementById('asking');

//DOM Val Append//

// const newName = document.createElement('h2');
// const newImage = document.createElement('img');
// const newAbility = document.createElement('p');

//DOM Buttons//

const startButton = document.getElementById('startQ');

const ans1 = document.getElementById('answer1');
const ans2 = document.getElementById('answer2');
const ans3 = document.getElementById('answer3');
const ans4 = document.getElementById('answer4');
const ans5 = document.getElementById('answer5');

////DOM Actions////

startButton.addEventListener('click', () => {
    pokeNature = pokeNatureBase;
    mainPageSum();
    listGen();
    questionGen();
    questHead.innerHTML = `Question ${turn}`
    frontpage.style.display = 'none';
    mainContent.style.display = 'block';
})


mainContent.addEventListener('click', (e)=>{
    endCheck();
    let functVal = e.target.dataset.value;
    if (e.target.localName !== 'button'){
        return
    }
    chosenAnswer(functVal);
    questionGen();
    turn += 1;
    questHead.innerHTML = `Question ${turn}`
})





///skip///

const skipBut = document.getElementById('skip');

skipBut.addEventListener('click', () =>{
 pokeVal = 43;
 frontpage.style.display = 'none';
 resultPage.style.display = 'block';
 callResult();
 setTimeout(()=>{resultPageGen()}, 3000);
 
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