//przechowywanie informacji o tym, jak przebiegła gra
class Statistics {
    constructor() {
        this.gameStats = [];
    }

    //metoda pobierająca wyniki z gry
    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        };
        console.log(gameResult);
        this.gameStats.push(gameResult);
    }
    //wyświetlanie wyników gry na stronie
    showGameStats() {
        let games = this.gameStats.length;
        let wins = this.gameStats.filter(result => result.win).length;
        let losses = this.gameStats.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}

// const stats = new Statistics();