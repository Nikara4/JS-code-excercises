//losowanie wartości dla trzech pól
class Draw {
    constructor() {
        this.options = ['crimson', 'aquamarine', 'deepskyblue'];
        let _result = this.drawResult();
        //metoda zwracająca wynik losowania
        this.getDrawResult = () => _result;
    }
    //obliczanie wyniku losowania
    drawResult = () => {
        let colors = [];
        //uzupełnianie poprzez losowanie
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        }
        return colors;
    };
}

// const drawing = new Draw();