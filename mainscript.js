let url = 'https://pokeapi.co/api/v2/generation/3/';
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

console.log(array1);


// var data = [
//     {
//         "id": 30000,
//         "display_name": "John Doe",
//         "email": "Johndoes@testmail.com"
//     },
//     {
//         "id": 30001,
//         "display_name": "John Cena",
//         "email": "JohnCens@testmail.com"
//     },
//     {
//         "id": 30002,
//         "display_name": "John kabaraya",
//         "email": "Johnkabarayas@testmail.com"
//     }
// ]

// var ids = [];
// var display_names = [];
// var emails = [];

// function result(data) {

//     data.forEach(element => {
//         ids.push(element.id);
//         display_names.push(element.display_name);
//         emails.push(element.email);
//     });

//     return { "ids": ids, "display-names": display_names, "emails": emails };
// }

// console.log(result(data));

// fetch(url)
//   .then(res => {
//     //   if (res.ok){
//     //       console.log('success')
//     //       return res.json
//     //   }
//     //   return 'aaaaaaaa'
//     // console.log("success!");
//     return res.json();
//   })
//   .then(res => {
//       console.log(res)
//   })
//   .catch(err => {
//     console.log("something went wrong...", err);
//   })
//   .finally(() => console.log('Request was made'))