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

    let random = Math.floor(Math.random() * quotes.length);

    return quotes[random];

}


/***
 * `printQuote` function
***/
function printQuote() {

    let random = getRandomQuote();
    let quoteBlock = document.getElementById('quote-block');
    let quote = random.quote;
    let author = random.author;
    let source = random.source;
    let year = random.year;
    let tag = random.tag;
    let citation = random.citation;

    let quoteHTML = `
            <div id="top-wrapper">
                <p id="quote">${quote}</p>
            </div>
            <div id="middle-wrapper">
                <p id="author"> -${author}</p>
                <p id="source">, ${source.italics()}</p>
                <p id="year">${year}</p>
            </div>
            <div id="tag-wrapper">
                <p id="tag">Tag: ${tag}</p>
                <a id="citation" href="${citation}">Citation</a>
            </div>

    `;

    quoteBlock.innerHTML = quoteHTML;

    let rQuote = document.getElementById('quote');
    let rAuthor = document.getElementById('author');
    let rSource = document.getElementById('source');
    let rYear = document.getElementById('year');
    let rTag = document.getElementById('tag');
    let rCitation = document.getElementById('citation');


    if (quote) {

        rQuote.innerHTML = `${quote}`;

    } else {

        rQuote.innerHTML = '';

    }
    if (author) {

        rAuthor.innerHTML = ` -${author}`;

    } else {

        rAuthor.innerHTML = '';

    }
    if (source) {

        rSource.innerHTML = `, ${source.italics()}`;

    } else {

        rSource.innerHTML = '';

    }
    if (year) {

        rYear.innerHTML = year;

    } else {

        rYear.innerHTML = '';

    }
    if (tag) {

        rTag.innerHTML = `Tag: ${tag}`;

    } else {

        rTag.innerHTML = '';

    }
    if (citation) {

        rCitation.innerHTML = `<a id="citation" href="${citation}">Citation: ${citation}</a>`;

    } else {

        rCitation.innerHTML = '';

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

printQuote();
/**
 * Changes quote and bg color every 5 seconds
 */
setInterval(() => {

    randomBackground();
    printQuote();

}, 10000);



document.getElementById('load-quote').addEventListener("click", () => {

    randomBackground();
    printQuote();

});

