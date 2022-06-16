////// ADD DESCRIPTIONS AND MORE QUESTIONS //////



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
let pokeValNature;
let pokeValPlayer;

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
const natureList = ['adamant', 'brave', 'lonely', 'naughty', 'bold', 'lax', 'relaxed', 'impish', 'timid',
'hasty', 'jolly', 'naive', 'mild', 'quiet', 'rash', 'modest', 'gently', 'calm', 'sassy', 'careful', 'hardy',
'docile', 'serious', 'bashful', 'quirky']

const natureListDesc =[
    [`“Often dozes off”, “Loves to eat”, “Often scatters things”, “Likes to relax”, “Scatters things often”`],
    [`“Proud of its power”, “Likes to thrash about”, “A little quick tempered”, “Likes to fight”, “Quick tempered”`],
    [`“Sturdy body”, “Capable of taking hits”, “Highly persistent”, “Good endurance”, “Good perseverance”`],
    [`“Likes to run”, “Alert to sounds”, “Impetuous and silly”, “Somewhat of a clown”, “Quick to flee”`],
    [`“Highly curious”, “Mischievous”, “Thoroughly cunning”, “Often lost in thought”, “Very finicky”`],
    [`“Strong willed”, “Somewhat vain”, “Strongly defiant”, “Hates to lose”, “Somewhat stubborn”`]
]

// const natureTracker = [
//     [adamant, brave, lonely, naughty],
//     [bold, lax, relaxed, impish],
//     [timid, hasty, jolly, naive],
//     [mild, quiet, rash, modest],
//     [gentle, calm, sassy, careful],
//     [hardy, docile, serious, bashful, quirky]
// ]

// HP – “Often dozes off”, “Loves to eat”, “Often scatters things”, “Likes to relax”, “Scatters things often”
// Attack – “Proud of its power”, “Likes to thrash about”, “A little quick tempered”, “Likes to fight”, “Quick tempered”
// Defense – “Sturdy body”, “Capable of taking hits”, “Highly persistent”, “Good endurance”, “Good perseverance”
// Speed – “Likes to run”, “Alert to sounds”, “Impetuous and silly”, “Somewhat of a clown”, “Quick to flee”
// Sp. Atk. – “Highly curious”, “Mischievous”, “Thoroughly cunning”, “Often lost in thought”, “Very finicky”
// Sp. Def. – “Strong willed”, “Somewhat vain”, “Strongly defiant”, “Hates to lose”, “Somewhat stubborn”

/////

let newText;

let pokeNature = {}

let availChoices = [];

let actualVal = 0;

let turn = 1;

let pokeVal;

let finalNature = [];

let finalObject = [];

let finalIndex;

let limiter = 0;

/////////////
//Functions//
/////////////

const natureCheck = () => {  /// Checks for final nature solution
    let limit = 0;
    if (limiter === 0){
    for(key in pokeNature){
        if (pokeNature[key] > limit){
            limit = pokeNature[key];
            finalNature = [];
            finalNature.push(key);
        }
        else if(pokeNature[key] === limit){
            finalNature.push(key);
        }
    } 
    for (let i = 0; i < finalNature.length; i++){
        finalObject.push(0);
    }
}
    limiter += 1;
    for(num in finalObject){
        if (finalObject[num] >= 3){
            finalIndex = num;
        }
    }
}


const listGen = () => { // generates main question list
    for (i = 0; i < mainQuestion.length; i ++){
        availChoices.push(i);
    }
}

const questionRng = () => { // rng for questions
    let questionVal = Math.floor(Math.random() * availChoices.length);
    actualVal = availChoices[questionVal];
    availChoices.splice(questionVal, 1);
}

const descriptionGen = () => {
    let valCheck = natureList.indexOf(finalNature[finalIndex]);
    if(0 <= valCheck <= 3){
        newText = natureListDesc[0]
    }
    if(4<= valCheck <=7){
        newText = natureListDesc[1]
    }
    if(8<= valCheck <=11){
        newText = natureListDesc[2]
    }
    if(12<= valCheck <=15){
        newText = natureListDesc[3]
    }
    if(16<= valCheck <= 19){
        newText = natureListDesc[4]
    }
    if(20<= valCheck <= 24){
        newText = natureListDesc[5]
    }

}

const endCheck = () => { // conditional check for endstate
    if (turn >= 11){
        natureCheck();
        if(finalIndex !== undefined){
        mainContent.style.display = 'none';
        resultPage.style.display = 'block';
        callResult();
        setTimeout(()=>{
            resultPageGen();
            natureStuff();
        }, 3000);
    }
    }
}

const resultPageGen = () => { //endpage generation
    
    let newName = document.createElement('h2');
    let newImage = document.createElement('img');
    let newAbility = document.createElement('p');
    let newAbility2 = document.createElement('p');
    let newAbility3 = document.createElement('p');

    newName.innerText = pokeValName;
    newImage.src = `${pokeValSprites}`;
    newAbility.innerText = pokeValAbility[0].ability.name;
    resultPage.append(newName);
    resultPage.append(newImage);
    resultPage.append(newAbility);

    if(pokeValAbility[1] === undefined){
        return;
    } else if(pokeValAbility[1]['is_hidden'] === true){
        newAbility2.innerText = `${pokeValAbility[1].ability.name}`;
        newAbility2.classList.add("hidden_ab");
        resultPage.append(newAbility2);
    } else if (pokeValAbility[1] !== undefined){
        newAbility2.innerText = `${pokeValAbility[1].ability.name}`;
        resultPage.append(newAbility2);
    }

    if(pokeValAbility[2] === undefined){
        return;
    }
    else if(pokeValAbility[2] !== undefined){
        newAbility3.innerText = `${pokeValAbility[2].ability.name}`;
        newAbility3.classList.add("hidden_ab");
        resultPage.append(newAbility3);
    }
}

const natureStuff = () =>{ // page second half generation;
    let playerName = document.createElement('p');
    let addNature = document.createElement('p');
    let newTextAdd = document.createElement('p');
    let messageNameNature = document.createElement('p');
    let fillerText = document.createElement('p');

    messageNameNature.innerText = `${pokeValPlayer}, your nature is ${finalNature[finalIndex]}`
    playerName.innerText = pokeValPlayer;
    addNature.innerText = finalNature[finalIndex];
    fillerText.innerText = "You tend to be:"

    descriptionGen();

    newTextAdd.innerText = newText;

    resultPage.append(messageNameNature);
    resultPage.append(fillerText);
    resultPage.append(newTextAdd);

}

const mainPageSum = () =>{  /// Pokemon link generation
    let firstVal;
    let secondVal;
    let resultCalc;

    if(firstName.value === "" || firstName.value === null){
        pokeValPlayer = 'unknown';
        firstVal = 12;
    }
    if(favoriteP.value === ""){
        secondVal = Math.floor(Math.random()*151)
    }
    if(firstName.value !== "" && favoriteP.value !== ""){
        firstVal = parseInt(firstName.value.length);
        secondVal = parseInt(favoriteP.value.length);
        pokeValPlayer = firstName.value;
    }

    resultCalc = (firstVal ** secondVal) % (898);
    pokeVal = resultCalc;
}


//Functions for adding values//
const attack = (rate) => {
    if(rate === 0){
    pokeNature.hardy += 1;
    pokeNature.lonely += 1;
    pokeNature.adamant += 1;
    pokeNature.naughty += 1;
    pokeNature.brave += 1;
    }
}

const defense = (rate) => {
    if(rate === 0){
    pokeNature.bold += 1;
    pokeNature.docile += 1;
    pokeNature.impish += 1;
    pokeNature.lax += 1;
    pokeNature.relaxed += 1;
    }
}

const spAttack = (rate) => {
    if(rate === 0){
    pokeNature.modest += 1;
    pokeNature.mild += 1;
    pokeNature.bashful += 1;
    pokeNature.rash += 1;
    pokeNature.quiet += 1;
    }
}

const spDefense = (rate) => {
    if(rate === 0){
    pokeNature.calm += 1;
    pokeNature.gentle += 1;
    pokeNature.careful += 1;
    pokeNature.quirky += 1;
    pokeNature.sassy += 1;
    }
}

const speed = (rate) => {
    if(rate === 0){
    pokeNature.timid += 1;
    pokeNature.hasty += 1;
    pokeNature.jolly += 1;
    pokeNature.naive += 1;
    pokeNature.serious += 1;
    }
}

//Function for calling atk/def/spd/spa/spe//

const chosenAnswer = (val) => {
    if (turn >= 11 && finalNature.length !== 1){
        if (val === '1'){
            finalObject[0] += 1;
        }
        if (val === '2'){
            finalObject[1] += 1;
        }
        if (val === '3'){
            finalObject[2] += 1;
        }
        if (val === '4'){
            finalObject[3] += 1;
        }
        if (val === '5'){
            finalObject[4] += 1;
        }
    }
    if (val === '1'){
        attack(limiter);
    }
    if (val === '2'){
        defense(limiter);
    }
    if (val === '3'){
        spAttack(limiter);
    }
    if (val === '4'){
        spDefense(limiter);
    }
    if (val === '5'){
        speed(limiter);
    }
}


///////////////////
//Question/Answer//
///////////////////

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
        question: "Cats are better than dogs",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Books are for nerds",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Never wear a hat indoors",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Gamers rise up",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Despacito was over-rated",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mankey is the strongest monkey",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Ash's Pokemon career is filled with pity",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Brock was misunderstood",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Squirtle was objectively the best choice",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The \"Let's Go\" versions were a mistake",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Gamefreak hasn't made anything worthwhile in years",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Jessie and James are the heart of the series",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Generation 1:RBY was the best generation",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Generation 2:GSC was the best generation",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Eevee is a better mascot than Pikachu",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Team Rocket should've been a bigger part of the game series",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "10 years old is probably too young for a journey",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Ash's revival via poketears was strange",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Pikachu's vacation is the best short objectively",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Generation 2 was a lazy update to generation 1",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The Team Rocket event at Goldenrod was tedious",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You would buy a Magikarp for $1000",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "An open world version of Pokemon works better than a linear path",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mewtwo was pretty cool",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mimikyu is objectively the best Pokemon",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Nuzlocke is the best format to play",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You feel comfortable leaving your starter at the Daycare",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mega-evolutions were a great addition to the series",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "placeholder",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You are willing to look after a Snorlax",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Fire, water and grass are the best selection for starters",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Digimon was better",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
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
const favoriteP = document.getElementById('favoritePokemon');
const questionBox = document.getElementById('questionHolder');

//DOM Pages//

const frontpage = document.getElementById('mainpage');
const mainContent = document.getElementById('questionpage');
const resultPage = document.getElementById('resultpage');
const questHead = document.getElementById('questionHead');
const supplementPage = document.getElementById('supplement');

//DOM Text//

const questionAsked = document.getElementById('asking');

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





// ///skip///

// const skipBut = document.getElementById('skip');

// skipBut.addEventListener('click', () =>{
//  pokeVal = 19;
//  frontpage.style.display = 'none';
//  resultPage.style.display = 'block';
//  callResult();
//  setTimeout(()=>{resultPageGen()}, 3000);
 
// })