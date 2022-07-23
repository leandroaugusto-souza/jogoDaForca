let palavras = [
  "ZEBRA",
  "MERCURIO",
  "TESTOSTERONA",
  "VAGALUME",
  "HIPOPOTAMO",
  "MARROCOS",
  "GIRAFA",
  "RICARDINHO",
  "GUILHERME",
  "EZIQUIEL",
  "CHEVROLET",
  "MORDOMIA",
  "CASAMENTO",
  "PIRULITO",
  "BIGODE",
  "SAPATEIRA",
  "MARCENEIRO",
  ];
  
  function randomWord() {
    return palavras[
      Math.floor(Math.random() * palavras.length)
    ];
  }
  
  export { randomWord };