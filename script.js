const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter-btn");
const newQuoteBtn = document.querySelector("#new-quote");


let apiQuotes=[];

//show new quote
function newQuote(){
    //pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //check if Author field is blank = "unknown"
     if (!quote.author) {
         quoteAuthor.innerHTML='Unknown';
     } else {
         quoteAuthor.innerHTML=quote.author;
     }
    
     //check quote length styling
     if(quote.text.length >80) {
         quoteText.classList.add('long-quote');
         
     } else {
         quoteText.classList.remove('long-text');
     }
    
    
    // quoteAuthor.innerHTML =quote.author;
    quoteText.innerHTML=quote.text;
}
//get quotes from API
async function getQuote(){
  const apiUrl= 'https://type.fit/api/quotes';
  try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();

  } catch(error){
//Catch error here
 } 
}

//on Load

getQuote();