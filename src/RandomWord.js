let palavras = [
  "ZEBRA",
  "MACACO",
  "ARARA",
  "VAGALUME",
  "HIPOPOTAMO",
  "BANANA",
  "GIRAFA",
  "PANELA",
  "MELANCIA",
  "BOLA",
  "TUCANO",
  "GOLFINHO",
  "OVELHA",
  "PIRULITO",
  "BIGODE",
  "PATO",
  "RATO",
  ];
  
  function randomWord() {
    return palavras[
      Math.floor(Math.random() * palavras.length)
    ];
  }
  
  export { randomWord };