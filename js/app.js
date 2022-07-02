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

    return quotes[random];

}


/***
 * `printQuote` function
***/
function printQuote() {

    let random = getRandomQuote();

    let quote = random.quote;
    let author = random.author;
    let source = random.source;
    let date = random.date;
    let tag = random.tag;

    rQuote.innerHTML = quote;
    rAuthor.innerHTML = ` -${author}`;
    rSource.innerHTML = `, ${source.italics()}`;
    rDate.innerHTML = date;
    rTag.innerHTML = `Tag: ${tag}`;

    if (random.date == false) {

        rDate.innerHTML = '';

    }
    if (random.source == false) {

        rSource.innerHTML = '';

    }

}

/**
 * Gets a random RGB value
 */
function randomBackground() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.background = bgColor;

}

/**
 * Changes quote and bg color every 5 seconds
 */
setInterval(() => {

    randomBackground();
    printQuote();

}, 5000);



document.getElementById('load-quote').addEventListener("click", () => {

    randomBackground();
    printQuote();

});

