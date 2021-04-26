const draw = function (event) {
    const x = event.clientX;
    const y = event.clientY;
    const div = document.createElement("div");
    div.style.top = y + "px";
    div.style.left = x + "px";
    document.body.appendChild(div);
  };
  
  const startListening = function () {
    document.body.addEventListener("mousemove", draw);
  };
  
  const stopListening = function () {
    document.body.removeEventListener("mousemove", draw);
  };
  
  document.body.addEventListener("mousedown", startListening);
  document.body.addEventListener("mouseup", stopListening);