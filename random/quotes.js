const quotes = [
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    },
    {
        quote: 'the way to get started is to quit talking and begin',
        author: 'Walt Disney'
    }
]
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;