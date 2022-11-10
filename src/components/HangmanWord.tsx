import React, { CSSProperties } from "react";

interface HangmanWordPropsType {
  wordToGuess: string;
  letterGuesses: string[];
  gameDone: boolean;
}

const HangmanWord = (props: HangmanWordPropsType) => {
  const { wordToGuess, letterGuesses, gameDone } = props;

  return (
    <div style={styles.wordWrapper}>
      {wordToGuess.split('').map((letter, index) => {
        const isVisible = letterGuesses.includes(letter) && wordToGuess.includes(letter);
        const missedLetter = !isVisible && gameDone;
        return (
          <div 
            key={`${letter}-${index}`}
            style={
              {
                ...styles.letter, 
                ...isVisible ? styles.correct : styles.invisible,
                ...missedLetter ? styles.incorrect : {},
              }
            }>
            {letter}
          </div>
        )}
      )}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wordWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  letter: {
    width: 40,
    fontSize: 32,
    fontWeight: 500,
    textAlign: 'center',
    borderBottomWidth: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: 'black', 
  },
  incorrect: {
    color: 'red',
  },
  visible: {
    color: 'black',
  },
  invisible: {
    color: 'transparent',
  }
}

export default HangmanWord;
