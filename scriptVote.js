document.addEventListener('DOMContentLoaded', ()=> {
    //DOM
const swipper = document.querySelector('#swipper');

// constants
const urls = [
    'card vote.svg',
    'card vote.svg',
    'card vote.svg',
    'card vote.svg',
];

//variables
let CarteVoteCount = 0;

//functions
function appendNewcarteVote () {
    const carteVoteInstance = new CarteVote({
        imageUrl: urls[CarteVoteCount % 5]
    });

    swipper.append(carteVoteInstance.element);
    CarteVoteCount++;
}

// first 5 cards 
for (let i = 0; i<5; i++){
    appendNewCarteVote();
}
});

