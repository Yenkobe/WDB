
//Fetch API is the newer way of making requests via JS ---> Supports promises! ---
// --> Not supported in Internet Explorer !! 

// fetch("http://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVED!", res);
//         // res.json().then(data => console.log("JSON DONE", data));
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("http://swapi.dev/api/people/2/");
//     })
//     .then((res) => {
//         console.log("SECOND REQUEST RESOLVED");
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });

// ======= SAME RESULT =========

const loadStarWarsPeople = async () => {
    // try ---- to catch the error
    try {
        const res = await fetch("http://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("http://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!", e);
    }
}

loadStarWarsPeople();