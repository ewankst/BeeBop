class CarteVote {
    constructor({
        imageUrl,
    }) {
        this.imageUrl = imageUrl;
        this.init();
    }

    init() {
        const carteVoteElement = document.createElement('div');
        carteVoteElement.classList.add('carteVote');
        const img = document.createElement('img');
        img.src = this.imageUrl;
        carteVoteElement.appendChild(img);
        this.element = carteVoteElement;
    }
}