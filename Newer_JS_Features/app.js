//============== Default Params =============
// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides) + 1
// }

function multiply(a, b) {
    b = typeof b !== 'undifined' ? b : 1;
    return a * b;
}
// multiply(7); // 7
// multiply(7,3); // 21
//// TOTALLY THE SAME BUT WITH THE NEW METHOD

function multiply(a, b = 1) {
    return a * b;

}


// =============== Spread in function Calls =================
// Expands an iterable (array,string,etc.) into a list of arguments

// const nums = [9, 4, 2, 8, 10, 7];
// Math.max(nums); // 10
// //use Spread!

// Math.max(...nums); // NaN


/// ====== Sread with Array  ==========
const cats = [' Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Firulay'];

const allPets = [...cats, ...dogs]

//// =========== Spread with Objects ========

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canine' };

// =============== Rest Params ========

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}
// ======== destructing Array =====
// ======== Destructing Objects ============

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})



