//zasady gry - sprawdzanie, kto wygrał, a kto przegrał
class Result {
    //sprawdzanie, czy użytkownik wygrał
    static checkWin(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) {
            return true;
        } else return false;
    };
    //sprawdzanie, czy wygrana oraz powiększenie stawki
    static moneyWonInGame(result, bid) {
        if (result) return 3 * bid;
        else return 0;
    };
}

// Result.moneyWonInGame(true, 20);