//główna klasa definiująca sposób działania gry; relacja z pozostałymi klasami
class Game {
    constructor(start) {
        //pobieranie klas
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        //pobieranie przycisku i nastawienie nasłuchiwania (wszystko wykonuje się za jego pomocą)
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        //pobieranie elementów z DOM
        this.spnWallet = document.querySelector('.wallet');
        this.inputBid = document.getElementById('bid');
        this.boards = document.querySelectorAll('div.color');

        this.spnResult = document.querySelector('.score span.result');
        this.spnGames = document.querySelector('.score span.number');
        this.spnWin = document.querySelector('.score span.win');
        this.spnLoss = document.querySelector('.score span.loss');

        this.render();
    }
    //renderowanie-czyszczenie gry; ustawienia początkowe
    render(colors = ['#ddd', '#ddd', '#ddd'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        this.spnWallet.textContent = `${money}$`;
        if (result) {
            result = `Wygrałeś ${wonMoney}$.`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$.`;
        }
        this.spnResult.textContent = result;
        this.spnGames.textContent = stats[0];
        this.spnWin.textContent = stats[1];
        this.spnLoss.textContent = stats[2];

        this.boards.forEach((color, index) => {
            color.style.backgroundColor = colors[index];
        });
        this.inputBid.value = '';
    }
    //start gry, wykonywanie wszystkich czynności i instrukcji z pozostałych klas
    startGame() {
        const bid = Math.floor(this.inputBid.value);
        if (bid < 1) return alert('Kwota, którą chcesz zagrać jest za mała.');
        if (!this.wallet.checkCanPlay(bid)) return alert('Nie posiadasz takich środków lub podana została nieprawidłowa wartość.');

        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWin(colors);
        // console.log(colors, win);
        const wonMoney = Result.moneyWonInGame(win, bid);
        // console.log(wonMoney);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStats(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStats(), bid, wonMoney);
    }
}