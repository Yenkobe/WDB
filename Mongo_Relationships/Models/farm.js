const mongoose = require('mongoose');
const { Schema } = mongoose;
// https://mongoosejs.com/ --- conect from the localhost we can get it from the mongoose pag
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Connection OPEN!!")
    })
    .catch(() => {
        console.log("Oh no ERROR!!")
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', ' Fall', 'Winter']
    }
});
//create the second farm model
const farmSchema = new Schema({
    name: String,
    city: String,
    // One option is to store your data separately, but the store references to document ID's somewhere inside the parent.
    // in mongoosejs.com there is a guide called "Populate" 
    products: [{ type: Schema.Types.ObjectId, ref: 'Products' }

    ]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Watermelon', price: 15.99, season: 'Summer' },
//     { name: 'Asparagus', price: 4.99, season: 'Spring' }

// ])

const makeFarm = async () => {
    const farm = new Farm({ name: ' Steven Best Farms', city: 'Nashville, TN' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}

farm.findOne({ name: 'Steven Best Farms' })
    .populate('products')
    .then(farm => console.log(farm))

