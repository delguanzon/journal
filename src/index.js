import Entry from './journal.js';

//document.getElementById("word-count").replaceChildren("test");

function handleInput(event) {
  event.preventDefault();
  let title = document.getElementById("title-input").value;
  let passage = document.getElementById("passage-input").value;
  let entry = new Entry(passage,title);
  let pElement = document.getElementById("word-count");
  pElement.replaceChildren(entry.getWordCount(passage));

  let vowelElement = document.getElementById("vowel-count");
  vowelElement.replaceChildren(entry.getVowelConsCount(passage));

  let firstElement = document.getElementById("first");
  firstElement.replaceChildren(entry.getTeaser());
  ;
}

let form = document.getElementById("input-form");
form.addEventListener("submit", handleInput);