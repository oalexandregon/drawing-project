const getButton = document.querySelector('button');
const participants = ['Gabriel', 'Christian', 'Rodrigo', 'Xandão', 'Pedro', 'Álvaro'];



function sortition() {
    let drawedIndex = Math.floor(Math.random() * participants.length);
    return participants[drawedIndex];
}

function displayPerson() {
    const result = document.createElement('p');
    const newH2 = document.createElement('h2');
    const oldParagraph =  document.querySelector('.display > p');
    const getH1 = document.querySelector('.display > h2');
    const getDisplay = document.querySelector('.display');

    oldParagraph.remove();

   getDisplay.insertBefore(newH2, getH1);
   getDisplay.insertBefore(result, getH1);



}

displayPerson();



getButton.addEventListener('click', () => {
    const personDrawed = sortition();
    
})
