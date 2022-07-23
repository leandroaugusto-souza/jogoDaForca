import React, { Component } from "react";
import { randomWord } from "./RandomWord";
import "./JogoForca.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";

class JogoForca extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
  };

  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  generateKeypad() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = "Parabéns, você ganhou!!!";
    if (gameOver) gameState = "Você perdeu!!! Tente outra vez.";
    let restart = gameOver || isWinner;
    return (
      <div className="JogoForca">
        <h2>Jogo da Forca</h2>
        <img src={this.props.images[this.state.noOfWrong]} alt="JogoForca" />
        <p>
          Tentativas restantes: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Descubra a palavra</p>
        <p className="Palavra">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="BotoesLetras">{gameState}</p>
        {restart && (
          <button id="reset" onClick={this.reset}>
            Reiniciar
          </button>
        )}
      </div>
    );
  }
}

export default JogoForca;