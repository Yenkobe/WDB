// Make a request for users
// axios API labrary

// axios.get("http://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESPONSE:", res);
//     })
//     .catch(e => {
//         console.log("ERROR!!. e")
//     });

// ====== async FUNCTION ==========

// geting the data with "id"

// const getStarWarPerson = async (id) => {
//     try {
//         const res = await axios.get(`http://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch (e) {
//         console.log("ERROR!!", e);
//     }
// };

// getStarWarPerson(29);

// DAD JOKES ====== 

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return " NO JOKES AVAILABLE! SORRY !!"
    }

}

button.addEventListener('click', addNewJoke)