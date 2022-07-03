const mongoose = require('mongoose');
// https://mongoosejs.com/ --- conect from the localhost we can get it from the mongoose pag
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Connection OPEN!!")
    })
    .catch(() => {
        console.log("Oh no ERROR!!")
        console.log(err)
    })


const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    // Array of String
    addresses: [
        {
            // to turn off id
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Steven',
        last: 'Sanchez'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)

}

//Adding difenrent function

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '888 washington St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res)
}

addAddress('62c0ed42475f0e1427409922');
// makeUser();