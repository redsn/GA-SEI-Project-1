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
            // console.log(result);
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
let newPokeName;
let pokeValSprites = [];
let pokeValNature;
let pokeValPlayer;

///////////
//OBJECTS//
///////////

const pokeNatureBase = {
    "Adamant": 0,
    "Bashful": 0,
    "Bold": 0,
    "Brave": 0,
    "Calm": 0,
    "Careful": 0,
    "Docile": 0,
    "Gentle": 0,
    "Hardy": 0,
    "Hasty": 0,
    "Impish": 0,
    "Jolly": 0,
    "Lax": 0,
    "Lonely": 0,
    "Mild": 0,
    "Modest": 0,
    "Naive": 0,
    "Naughty": 0,
    "Quiet": 0,
    "Quirky": 0,
    "Rash": 0,
    "Relaxed": 0,
    "Sassy": 0,
    "Serious": 0,
    "Timid": 0
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
        loader();
        // resultPage.style.display = 'block';
        callResult();
        setTimeout(()=>{
            resultPageGen();
            natureStuff();
            resultPage.style.display = 'block';
            navAbout.style.display = 'flex';
        }, 2000);
    }
    }
}

const resultPageGen = () => { //endpage generation
    
    let newName = document.createElement('h2');
    let newImage = document.createElement('img');
    let newAbility = document.createElement('p');
    let newAbility2 = document.createElement('p');
    let newAbility3 = document.createElement('p');
    let abilityMark = document.createElement('h3');

    newPokeName = pokeValName[0];
    newPokeName = newPokeName[0].toUpperCase() + newPokeName.substring(1);
    newName.innerText = newPokeName;
    newName.classList.add('pokeName')
    newImage.src = `${pokeValSprites}`;
    newAbility.classList.add("ability1");
    newAbility.innerText = pokeValAbility[0].ability.name;

    if (pokeValAbility[1] === undefined){
        abilityMark.innerText = 'Ability:';
    } else if(pokeValAbility[1] !== undefined){
        abilityMark.innerText = 'Abilities:'
    }

    resultPage.append(newName);
    resultPage.append(newImage);
    resultPage.append(abilityMark);
    resultPage.append(newAbility);

    if(pokeValAbility[1] === undefined){
        return;
    } else if(pokeValAbility[1]['is_hidden'] === true){
        newAbility2.innerText = `${pokeValAbility[1].ability.name}`;
        newAbility2.classList.add("hidden_ab");
        resultPage.append(newAbility2);
    } else if (pokeValAbility[1] !== undefined){
        newAbility2.innerText = `${pokeValAbility[1].ability.name}`;
        newAbility2.classList.add('ability2');
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

const loader = () => { // Temp loader for generating final result
    let loading = document.createElement('div');
    loading.classList.add("page");
    loading.classList.add("loadingStyle")
    loading.setAttribute('id', 'overlay');
    loading.style.zIndex = "3";
    loading.innerText = 'loading....';
    loading.style.backgroundColor = 'rgb(226, 52, 52)'
    mainLoader.append(loading);
    setTimeout(() => {
        loading.innerText = '';
        loading.classList.add('goAway');
        loading.classList.remove('page');
    }, 2000);
}

const natureStuff = () =>{ // page second half generation;
    let playerName = document.createElement('p');
    let addNature = document.createElement('p');
    let newTextAdd = document.createElement('p');
    let messageNameNature = document.createElement('p');
    let fillerText = document.createElement('p');

    messageNameNature.classList.add('cssMessage');
    fillerText.classList.add('cssFiller');
    newTextAdd.classList.add('cssNewtext');
    resultpageh1.classList.add('resultPageh1')


    messageNameNature.innerText = `${pokeValPlayer}, your nature is ${finalNature[finalIndex]}`
    playerName.innerText = pokeValPlayer;
    addNature.innerText = finalNature[finalIndex];
    // resultpageh1.innerText = finalNature[finalIndex];
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
        question: "Cats are better than dogs.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Books are for nerds.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You should never wear a hat indoors.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Gamers rise up.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Despacito was over-rated.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mankey is the strongest monkey.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Ash's Pokemon career was pitiful.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Brock was misunderstood.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Squirtle was objectively the best choice.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The \"Let's Go\" versions were a mistake.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Gamefreak hasn't made anything interesting in years",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Jessie and James are the heart of the series.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Generation 1:RBY was the best generation.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Generation 2:GSC was the best generation.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Eevee is a better mascot than Pikachu.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Team Rocket should've been a bigger part of the game series.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "10 years old is probably too young for a Pokemon journey",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "That one time Ash came back to life via tears was a bit much.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Pikachu's vacation is the best movie short.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Generation 2 was only marginally better than generation 1.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The Team Rocket event at Goldenrod was tedious.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You would buy a Magikarp for $1000.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "An open world version of Pokemon works better than a linear one.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mewtwo was pretty cool.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mimikyu is objectively the best Pokemon.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Nuzlocke is the best format to play.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You feel comfortable leaving your starter at the Daycare.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Mega-evolutions were a great addition to the series.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The Pokemon TCG is confusing.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "You are willing to look after a Snorlax.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Fire, water and grass are the best selection for starters.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Digimon was better.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
         question: "Pikachu was cuter in RBY.",
         answer1: "Strongly Agree",
         answer2: "Agree",
         answer3: "Neutral",
         answer4: "Disagree",
         answer5: "Strongly Disagree"
    },
    {
        question: "Uknowns were a worthless addition to the series.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Twitch plays Pokemon was a successful event.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The Pokemon movies are worthwhile.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "The Pokemon Trading Card Game is interesting.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Eevees are just dogs that can transform.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Gary was here, Ash is a loser.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Misty had an unhealthy obsession with Ash.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Starmie is terrifying.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Ho-oh was way better than Lugia.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Pokemon speach via sounds is better than saying their own name.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Weird Al's Twinkies sandwich is disgusting.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Misty was the best supporting trainer.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Lately Pokemon designs have been mediocre.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Feebas are often difficult to catch for like no reason.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Blissey is terrifying in competitive.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Shuckle is worthless.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
    },
    {
        question: "Pokemon is popular.",
        answer1: "Strongly Agree",
        answer2: "Agree",
        answer3: "Neutral",
        answer4: "Disagree",
        answer5: "Strongly Disagree"
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
const favoriteP = document.getElementById('favoritePokemon');
const questionBox = document.getElementById('questionHolder');

//DOM Pages//

const mainLoader = document.querySelector('main');
const frontpage = document.getElementById('mainpage');
const mainContent = document.getElementById('questionpage');
const resultPage = document.getElementById('resultpage');
const questHead = document.getElementById('questionHead');
const aboutThisPage = document.getElementById('aboutThis');

//DOM Text//

const questionAsked = document.getElementById('asking');

//DOM Interactables//

const abilityModalEnt = document.querySelector('.abilityEnt');

const startButton = document.getElementById('startQ');
const natureMod = document.getElementById('natureModal');
const natureModBox = document.querySelector('.modalN');
const natureClose = document.querySelector('.close');
const abilityDivBox = document.querySelector('.ability_div');
const resultpageh1 = document.getElementById('resulth1');
const abilityModalBox = document.querySelector('.modalA');
const navAbout = document.getElementById('aboutPage')

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
    navAbout.style.display = 'none';
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

natureMod.addEventListener('click',(e) =>{
    natureModBox.style.display = 'block';
})

natureClose.addEventListener('click', () =>{
    natureModBox.style.display = 'none'
})

abilityModalEnt.addEventListener('mouseover', () => {
    abilityModalBox.style.display = 'block'
})

abilityModalEnt.addEventListener('mouseout', () => {
    abilityModalBox.style.display = 'none'
})

navAbout.addEventListener('click', () => {
    frontpage.style.display = 'none';
    mainContent.style.display = 'none';
    resultPage.style.display = 'none';
    aboutThisPage.style.display = 'block';
})