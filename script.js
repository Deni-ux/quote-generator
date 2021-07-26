const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");


let apiQuotes=[];


function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden= true;
}

function removeLoadingSpinner(){
    if(!loader.hidden){
    loader.hidden = true;
    quoteContainer.hidden= false;
 }
}

//show new quote
function newQuote(){
    showLoadingSpinner();
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
         quoteText.classList.remove('long-quote');
     }
    
    //set quote, hide loader
    quoteText.innerHTML=quote.text;
    removeLoadingSpinner();
}
//get quotes from API
async function getQuote(){
    showLoadingSpinner();
  const apiUrl= 'https://type.fit/api/quotes';
  try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();

  } catch(error){
//Catch error here
 } 
}

//tweet quote
function tweetQuote(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.innerHTML} - ${quoteAuthor.innerHTML}`;
    window.open(twitterUrl, '_blank');

}
//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);

twitterBtn.addEventListener('click',tweetQuote);





//on Load

getQuote();
