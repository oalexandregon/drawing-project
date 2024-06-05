const getButton = document.querySelector('button');
const participants = ['Gabriel', 'Christian', 'Rodrigo', 'Xandão', 'Pedro', 'Álvaro']


function sortition () {
    let drawedIndex = Math.floor(Math.random()* participants.length);
    return participants[drawedIndex];
}

function displayPerson () {
    
}



getButton.addEventListener('click', () => {
    const personDrawed = sortition();
    console.log(personDrawed);
})
