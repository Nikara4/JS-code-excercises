    const result = [];

    const losowanie = function () {
        if (result.length === 6) return;

        const wynikLosowania = Math.floor(Math.random() * 49 + 1);

        for (let iteral = 0; iteral < result.length; iteral++) {
            if (wynikLosowania === result[iteral]) {
                alert("Losuj jeszcze raz");
                return losowanie();
            }
        }

        const div = document.createElement("div");
        div.textContent = wynikLosowania;
        result.push(wynikLosowania);
        document.body.appendChild(div);
    };

    const button = document.querySelector("button");

    button.addEventListener("click", losowanie);