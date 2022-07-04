/*** 
 * `quotes` array 
***/

const quotes = [

    {
        quote: '"The journey of a thousand miles begins with one step."',
        author: 'Lao Tzu',
        source: 'Chapter 64 of the Dao De Jing',
        citation: 'https://en.wikipedia.org/wiki/A_journey_of_a_thousand_miles_begins_with_a_single_step',
        tag: 'philosophical'
    },
    {
        quote: '"Life is what happens when you are busy making other plans."',
        author: 'John Lennon',
        source: 'lyric from “Beautiful Boy”',
        year: '1981',
        tag: 'philosophical'
    },
    {
        quote: '“My mother always used to say: The older you get, the better you get, unless you are a banana.”',
        author: 'Rose (Betty White)',
        source: 'The Golden Girls',
        tag: 'humour'
    },
    {
        quote: '“Clothes make the man. Naked people have little or no influence in society.”',
        author: 'Mark Twain',
        source: 'More Maxims of Mark',
        tag: 'humour'
    },
    {
        quote: '“I am not superstitious, but I am a little stitious.”',
        author: 'Michael Scott (Steve Carrell)',
        source: 'The Office',
        tag: 'humour'
    },
    {
        quote: '"Things change. And friends leave. Life does not stop for anybody."',
        author: 'Stephen Chbosky',
        source: 'The Perks of Being a Wallflower',
        tag: 'sad'
    },
    {
        quote: '"Tears come from the heart and not from the brain."',
        author: 'Leonardo da Vinci',
        source: 'The Notebooks of Leonardo Da Vinci',
        tag: 'sad'
    },

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

    /**
     * Random number between 0 and the ammount of quotes
     */
    let random = Math.floor(Math.random() * quotes.length);

    return quotes[random];

}


/***
 * `printQuote` function
***/
function printQuote() {

    let random = getRandomQuote();
    let quoteBlock = document.getElementById('quote-block');

    /**
     * Building the HTML to insert into the quote-block
     */
    let quoteHTML = `<div id="top-wrapper">`;
    quoteHTML += `<p id="quote">${random.quote}</p></div>`;
    quoteHTML += `<div id="middle-wrapper">`;
    quoteHTML += `<p id="author"> -${random.author}</p>`;
    quoteHTML += ` <p id="source">, ${random.source.italics()}</p>`
    if (random.year) {

        quoteHTML += `<p id="year">${random.year}</p>`;

    }
    quoteHTML += `</div>`;
    quoteHTML += `<div id="tag-wrapper">`;
    quoteHTML += `<p id="tag">Tag: ${random.tag}</p>`;
    if (random.citation) {

        quoteHTML += `<a id="citation" href="${random.citation}">Citation</a>`;

    }
    quoteHTML += `</div>`;

    /**
     * Declaring that the HTML from the code above is now the HTML
     * inside of the quote-block
     */
    quoteBlock.innerHTML = quoteHTML;
}

/**
 * Gets a random RGB value
 */
function randomBackground() {

    /**
     * Random number between 1 and 256 for each r, g, b value, then assigning that to an rgb value to get our random color
     */
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";

    /**
     * Assigning that random color to the background color
     */
    document.body.style.background = bgColor;

}

printQuote();
/**
 * Changes quote and bg color every 10 seconds
 */
let quoteTimer = setInterval(() => {

    randomBackground();
    printQuote();

}, 10000);



document.getElementById('load-quote').addEventListener("click", () => {


    randomBackground();
    printQuote();


});

