const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)
// encontrar el minPrice
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})



const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)
// 120, la suma de todo + el 100
