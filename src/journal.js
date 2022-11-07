//1. Create Entry objects that include a method to return the number of words in the entry.
//2. Add a separate method (or methods) to return the number of vowels and consonants in each entry
//3. Finally, add a method called getTeaser to return the first sentence of the entry.
//   3.a If the sentence is over 8 words, only display those first 8 words.

export default function Entry(body, title) {
  this.body = body;
  this.title = title;
}

Entry.prototype.getWordCount = function () {
  return this.body.split(" ").length;
};

Entry.prototype.getVowelConsCount = function () {
  // let regex = /[a,e,i,o,u]\w/;
  // this.body.match(regex);

  let vowels = ['a','e','i','o','u'];
  let ctrVowel = 0;

  let ctrCons = 0;
  let text = this.body.split(" ").join("").split("");
  text.forEach(function (letter) {
    let isNotVowel = true;
    vowels.forEach(function (element) {      
      if(letter.toLowerCase() === element) {
        ctrVowel++;
        isNotVowel = false;
      }
    });
    if(isNotVowel) {
      ctrCons++;
      
    }
  });
  return "Vowels: " + ctrVowel + ", Consonants: " + ctrCons;
};

Entry.prototype.getTeaser = function() {
  
  let sens = this.body.split(/([!.?])+/g);
  let firstSens = sens[0];
  let text = [];

  if(firstSens.split(" ").length > 8) {
    for(let i = 0; i < 8 ; i++) {
      text.push(firstSens.split(" ")[i]);
    }
    return text.join(" ");    
  }
  return firstSens;
}