import { CSSProperties } from "react";

interface HeaderPropsType {
  gameOver: boolean;
  gamePassed: boolean;
}

const Header = (props: HeaderPropsType) => {
  const { gameOver, gamePassed } = props;
  const status = gameOver ? 'You Lost!' : (gamePassed ? 'You Won!' : 'Game In-Progress');

  return (
    <div style={styles.wrapper}>
      <h1>Hangman - Guess the word</h1> 
      <h3>{status}</h3>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}

export default Header;
