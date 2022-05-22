// syntactically compact alternative to a regular function expression

// const add = function (x, y) {
//     return x + y;
// }
//SAME

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

//==============EXERCISE 48==============
// ex: greet("Yenduy") ==> "Hey yenduy!"
const greet = (name) => {
    return `Hey ${name}!`
}

// ================Implicit Returns =================
// no necesitas el "return" y el {}
// only work is there is a single expresion value 
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)
