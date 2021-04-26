const circle = document.querySelector(".circle");
const info = document.querySelector(".info");

const move = (e) => {
  info.textContent = `Wartość x: ${circle.offsetLeft}, wartość y: ${circle.offsetTop}.`;
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
      circle.style.left = circle.offsetLeft - 4 + "px";
      break;
    case 38:
      circle.style.top = circle.offsetTop - 4 + "px";
      break;
    case 39:
      circle.style.left = circle.offsetLeft + 4 + "px";
      break;
    case 40:
      circle.style.top = circle.offsetTop + 4 + "px";
      break;
    case 32:
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      circle.style.backgroundColor =
        "rgb(" + red + "," + green + "," + blue + ")";
      info.textContent = `Zmiana koloru na ${circle.style.backgroundColor}.`;
      break;
    default:
      info.textContent = `Kliknięto cokolwiek.`;
      break;
  }
};

window.addEventListener("keydown", move);