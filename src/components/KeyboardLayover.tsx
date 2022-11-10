import { CSSProperties, MouseEvent } from "react";
import { LETTERS } from "../constants";
import Actions from "./Actions";

interface KeyboardLayoverPropsType {
  addGuess: (letter: string) => void;
  wordToGuess: string;
  letterGuesses: string[];
  gameDone: boolean;
  restartGame: () => void;
}

const KeyboardLayover = (props: KeyboardLayoverPropsType) => {
  const { addGuess, wordToGuess, letterGuesses, gameDone, restartGame } = props;

  const onKeyClick = (e: MouseEvent<HTMLDivElement>) => {
    if(!gameDone)
      addGuess(e.currentTarget.innerText);
  }
  return (
    <div style={styles.keyboardWrapper}>
      {LETTERS.map(letter => {
        const letterUpper = letter.toUpperCase();
        const correctGuess = letterGuesses.includes(letterUpper) && wordToGuess.includes(letterUpper);
        const incorrectGuess = letterGuesses.includes(letterUpper) && !wordToGuess.includes(letterUpper);
        return (
          <div 
            key={letterUpper}
            style={{
              ...styles.letter,
              ...correctGuess ? styles.selected : {},
              ...incorrectGuess ? styles.disabled : {},
            }}
            onClick={onKeyClick}
          >
            {letterUpper}
          </div>
        )}
      )}
      <Actions restartGame={restartGame} />
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  keyboardWrapper: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    bottom: 0,
    height: 240,
    width: '100%',
    padding: 24,
    maxWidth: 800,
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  letter: {
    width: 29,
    textAlign: 'center',
    padding: 16,
    fontSize: 32,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 4,
  },
  selected: {
    backgroundColor: 'green',
    color: 'white',
  },
  disabled: {
    backgroundColor: 'gray',
    color: 'white',
  }
}

export default KeyboardLayover;

