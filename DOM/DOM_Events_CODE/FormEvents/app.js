

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// // exercise 61 -----------> 
// // Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');
// const listContainer = document.querySelector('#list');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
    
//     const productSelect = form.elements.product;
//     const qtySelect = form.elements.qty;
//     addList(productSelect.value, qtySelect.value);
//     productSelect.value ="";
//     qtySelect.value= "";
// });

// const addList = (product , qty) => {
//     const newList = document.createElement('li');
//     newList.innerText = `${qty}  ${product}`;
//     listContainer.appendChild(newList);
// };


