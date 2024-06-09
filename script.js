const getButton = document.querySelector('button');
const participants = ['Gabriel', 'Christian', 'Rodrigo', 'Xandão', 'Pedro', 'Álvaro'];
const result = document.createElement('p');
const newP = document.createElement('p');



function drawing() {
    let drawedIndex = Math.floor(Math.random() * participants.length);
    return { name: participants[drawedIndex], index: drawedIndex };
}

console.log(participants);

getButton.addEventListener('click', () => {

    const getDisplay = document.querySelector('.display');
    const { name, index } = drawing();

    result.textContent = name;
    result.className = 'result';
    newP.textContent = 'O próximo consórcio é do: ';

    getDisplay.children[1].remove();

    getDisplay.insertBefore(newP, getButton);
    getDisplay.insertBefore(result, getButton);

    //Remove the draw participant: 

    participants.splice(index, 1);
    console.log(participants);

    if (participants.length === 0) {
        getButton.style.display = 'none';
        newP.textContent = 'O último consórcio será do: ';
    }
})
