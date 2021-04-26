function getDayGreeterForName(name) {
    return function (day) {
      return `Hej ${name}, jak tam ${day} u Ciebie?`;
    };
  }
  
  const name = prompt("Podaj imię...") || "Bezimienny";
  const date = new Date().toLocaleString("pl-PL", { weekday: "long" });
  let getDayGreeting = getDayGreeterForName(name);
  let greeting = getDayGreeting(date);
  console.log(greeting);
  alert(greeting);
  