var changeBtn = document.getElementById("changeBtn");

var quoteOutput=document.getElementById("quoteOutput");
var quoteAuthor=document.getElementById("quoteAuthor");



function generateQuote() {

    var quotes = [{ quote: `“Be yourself; everyone else is already taken.”`, author: `― Oscar Wilde` },
        {quote: `“So many books, so little time.”`, author: `― Frank Zappa` },
        { quote: `“You only live once, but if you do it right, once is enough.”`, author: `― Mae West` },
        { quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`, author: `― J.K. Rowling, Harry Potter and the Goblet of Fire` },
        { quote: `“If you tell the truth, you don't have to remember anything..”`, author: `―  Mark Twain` },
        { quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ..”`, author: `―  C.S. Lewis, The Four Loves` },
        { quote: `“Always forgive your enemies; nothing annoys them so much.”`, author: `― Oscar Wilde` },
        { quote: `“A room without books is like a body without a soul.”`, author: `― Marcus Tullius Cicero` }
    ]

    var random = Math.trunc(Math.random() * quotes.length);

     quoteOutput.innerHTML=quotes[random].quote;
    authorOutput.innerHTML=quotes[random].author;
}

changeBtn.addEventListener("click", generateQuote);