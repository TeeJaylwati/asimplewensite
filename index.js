// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // Type method
// TypeWriter.prototype.type = function() {
//     //Currnt index of word
//     const current = this.wordIndex % this.words.length;
//     // GET full text of current word
//     const fullTxt = this.words[current];

//     //Check if deleting
//     if(this.isDeleting) {
//         //remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         //Add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.Deleting) {
//         typeSpeed /= 2;
//     }

//     //if word is complete
//     if(!this.isDeleting && this.txt === fullTxt) {
//         //Make pause at end 
//         typeSpeed = this.wait;
//         //Set delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         //Move to nxt word 
//         this.wordIndex++;
//         //pause before typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed)
// }

// // Init on DOM Load
// document.addEventListener('DOMContentLoaded', init);

// //Init App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     //Init TypeWriter
//     new TypeWriter(txtElement, words, wait);
// }



// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        //Currnt index of word
        const current = this.wordIndex % this.words.length;
        // GET full text of current word
        const fullTxt = this.words[current];

        //Check if deleting
        if (this.isDeleting) {
            //remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.Deleting) {
            typeSpeed /= 2;
        }

        //if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            //Make pause at end 
            typeSpeed = this.wait;
            //Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            //Move to nxt word 
            this.wordIndex++;
            //pause before typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}