const bcrypt = require('bcrypt');

// https://github.com/kelektiv/node.bcrypt.js


const hashPassword = async (pw) => {
    //Pass in the plain text password and the number of rounds:
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$WuaUpSy0sbyB5VGOiMu17.qn9q5r.ax0Ovd/1UxFHB7qzGvTkToBy')