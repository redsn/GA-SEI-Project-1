let naturesObject = {
    //all pokemon natures declared
}

new class theQuiz {
    //Class object for questions
    //Will modify naturesObject array
    //Add to each nature based on answer
    //Quiz will call resolution
}

let resolution = () => {
    // checks naturesObject for highest nature
    // display nature
    // display generic text for story
}


// ///////////////////////////// Functional fetch URL # disabled by courtesy
let url = 'https://pokeapi.co/api/v2/generation/3/';
let url2 = 'https://pokeapi.co/api/v2/pokemon/1/'
let array1 = [];

fetch(url)
    .then(result =>{
        return result.json()
    })
    .then(result =>{
        console.log(result);
        result.pokemon_species.forEach(element => {
                array1.push(element)})
    })

// fetch(url2)
//     .then(result =>{
//         return result.json()
//     })
//     .then(result =>{
//         console.log(result);
//     })

// console.log(array1);
// ///////////////////////////////////