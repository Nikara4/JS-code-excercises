const spnText = document.querySelector('span.text');
const spnCursor = document.querySelector('.cursor');
const btnStart = document.querySelector('.show-text');
const btnClear = document.querySelector('.clear-text');
const input = document.querySelector('input');

//DODAWANIE TEKSTU DO TABLICY
const addText = () => {
    spnText.textContent = '';
    const newText = input.value;

    //ANIMACJA TEKSTU I KURSORA
    // animacja - parametry
    let indexText = 0;
    const time = 40;

    // animacja - funkcja implementująca
    const addLetter = () => {
        if (input.value === '') {
            alert('Nic nie napisałeś');
            clearInterval(indexTyping);
        } else if (indexText >= 0) {
            spnText.textContent += newText[indexText];
        }
        indexText++;

        if (indexText === newText.length) clearInterval(indexTyping);
    }
    // animacja - utworzenie zmiennej przechowującej funkcję, która tworzy animację
    const indexTyping = setInterval(addLetter, time);

    const cursorAnimation = () => {
        spnCursor.classList.toggle('active');
    }

    setInterval(cursorAnimation, 500);

}

btnStart.addEventListener('click', addText);

//USUWANIE TEKSTU I CZYSZCZENIE STRONY
const clearText = () => {
    spnText.textContent = '';
    input.value = '';
}

btnClear.addEventListener('click', clearText);