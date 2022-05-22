
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Call of Duty',
        score: 100,
        year: 2000
    },
    {
        title: 'Fast and Furious',
        score: 95,
        year: 2001
    },
    {
        title: 'Merry Christmas John',
        score: 70,
        year: 1994
    },
    {
        title: 'Home alone',
        score: 85,
        year: 2005
    },
    {
        title: 'Good Girls',
        score: 80,
        year: 2015
    },
    {
        title: 'Kobe',
        score: 99,
        year: 2021
    },
    {
        title: 'The Last Dance',
        score: 99,
        year: 2021
    },
    {
        title: 'Spiderman 1',
        score: 80,
        year: 2009
    },
    {
        title: 'Spiderman 2',
        score: 90,
        year: 2012
    },
    {
        title: 'Waterwold',
        score: 62,
        year: 1995
    }

]

// const goodMovies = movies.filter(movies => {
//     return movies.score > 80
// }) SAME 

const goodMovies = movies.filter(movies => movies.score > 80)
//if i want only titles
const goodTitles = goodMovies.map(movies => movies.title)
// OR in a single line
///
const badMovies = movies.filter(movies => movies.score < 70)
const recentMovies = movies.filter(movies => movies.year > 2000)

exams.some(score => score >= 75)

//==============Exercise 50 =======
function allEvens(arrNums) {
    //This is using the .every() method wich is much better in this case
    return arrNums.every(num => num % 2 === 0);

    //This is how you would use the .some() method but it's really not preferable
    //return !(arrNums.some(num => num % 2 !== 0 ));
}