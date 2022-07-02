/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [

    {
        quote: '"The journey of a thousand miles begins with one step."',
        author: 'Lao Tzu',
        source: 'Chapter 64 of the Dao De Jing',
        date: false,
        tag: 'philosophical'
    },
    {
        quote: '"Life is what happens when you are busy making other plans."',
        author: 'John Lennon',
        source: 'lyric from “Beautiful Boy”',
        date: '11 April 1981',
        tag: 'philosophical'
    },
    {
        quote: '“My mother always used to say: The older you get, the better you get, unless you are a banana.”',
        author: 'Rose (Betty White)',
        source: 'The Golden Girls',
        date: false,
        tag: 'humour'
    },
    {
        quote: '“Clothes make the man. Naked people have little or no influence in society.”',
        author: 'Mark Twain',
        source: false,
        date: false,
        tag: 'humour'
    },
    {
        quote: '“I am not superstitious, but I am a little stitious.”',
        author: 'Michael Scott (Steve Carrell)',
        source: 'The Office',
        date: false,
        tag: 'humour'
    },
    {
        quote: '"Things change. And friends leave. Life does not stop for anybody."',
        author: 'Stephen Chbosky',
        source: 'The Perks of Being a Wallflower',
        date: false,
        tag: 'sad'
    },
    {
        quote: '"Tears come from the heart and not from the brain."',
        author: 'Leonardo da Vinci',
        source: false,
        date: false,
        tag: 'sad'
    },

];

/***
 * `getRandomQuote` function
***/
let rQuote = document.getElementById('quote');
let rAuthor = document.getElementById('author');
let rSource = document.getElementById('source');
let rDate = document.getElementById('date');
let rTag = document.getElementById('tag');

function getRandomQuote() {

    let random = Math.floor(Math.random() * quotes.length);

    let quote = quotes[random].quote;
    let author = quotes[random].author;
    let source = quotes[random].source;
    let date = quotes[random].date;
    let tag = quotes[random].tag;

    rQuote.innerHTML = quote;
    rAuthor.innerHTML = ` -${author}`;
    rSource.innerHTML = `, ${source.italics()}`;
    rDate.innerHTML = date;
    rTag.innerHTML = `Tag: ${tag}`;

    if (quotes[random].date == false) {

        rDate.innerHTML = '';

    }
    if (quotes[random].source == false) {

        rSource.innerHTML = '';

    }

}



/***
 * `printQuote` function
***/
function printQuote() {

    getRandomQuote();

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);