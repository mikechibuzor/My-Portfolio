export class TextEffect {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.txt = "";
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.wordIndex = 0;
    this.textEffect2();
    this.isDeleting = false;
  }

  static textEffect1(h2) {
    let char = 0;
    const splitText = h2.textContent.split("");
    h2.textContent = "";
    splitText.forEach((char) => {
      h2.innerHTML += `<span>${char}</span>`;
    });

    let timer = setInterval(onTick, 50);

    function onTick() {
      const span = h2.querySelectorAll("span")[char];
      if (span.textContent === " ") {
        span.classList.add("space");
      }
      span.classList.add("fade");
      char++;

      if (char === splitText.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
    }
  }

  textEffect2() {
    //Current index of word
    if (this.wordIndex === this.words.length) {
      this.wordIndex = 0;
    }
    const current = this.wordIndex;

    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if Deleting
    if (this.isDeleting) {
      //Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //inset txt
    this.txtElement.innerHTML = `<span class="txt-type">${this.txt}</span>`;
    //Initial Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // color orange when word complete
      this.txtElement.classList.toggle("color-orange");
      //Make pause at the end
      typeSpeed = this.wait;
      //Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move to the Next
      this.wordIndex++;
      //pause before start typing
      typeSpeed = 500;
      // remove color orange
      this.txtElement.classList.toggle("color-orange");
    }
    setTimeout(() => this.textEffect2(), typeSpeed);
  }
}
export function init(h1, wordss) {
  const getWords = wordss;
  const words = JSON.parse(getWords);

  new TextEffect(h1, words);
}
