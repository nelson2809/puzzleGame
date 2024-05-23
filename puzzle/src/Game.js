
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import CancelPresentationTwoToneIcon from '@mui/icons-material/CancelPresentationTwoTone';

const Game = () => {
  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(5);
  const [message, setMessage] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false); // State for congratulations pop-up
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetchLevels();
  }, []);

  useEffect(() => {
    if (levels.length > 0) {
      initLevel();
    }
  }, [levels, currentLevel]);

  const fetchLevels = async () => {
    try {
      const response = await axios.get(
        `https://api.datamuse.com/words?ml=${localStorage.getItem("selectedTopic")}&max=100`
      );
      const words = response.data
        .map((wordObj) => wordObj.word)
        .filter((word) => word.length <= 6);
      const levelWords = [];

      for (let i = 0; i < 5; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        levelWords.push(randomWord);
      }

      setLevels(levelWords);
    } catch (error) {
      console.error("Error fetching levels:", error);
    }
  };

  const initLevel = () => {
    setWinCount(0);
    setLossCount(5);
    setMessage("");
    setGuessedLetters([]);
    setGameOver(false);
  };

  const handleLetterClick = (letter) => {
    const word = levels[currentLevel];
    if (word.toUpperCase().includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      const newWinCount =
        winCount + (word.split(letter.toLowerCase()).length - 1);
      setWinCount(newWinCount);
      setMessage("Correct Letter");

      if (newWinCount === word.length) {
        setMessage("You Won");
        setGameOver(true);
        setScore(score + (lossCount * 20));
      }
    } else {
      const newLossCount = lossCount - 1;
      setLossCount(newLossCount);
      setMessage("Incorrect Letter");

      if (newLossCount === 0) {
        setMessage(`Game Over. The word was: ${word}`);
        setGameOver(true);
      }
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < 4) {
      setCurrentLevel(currentLevel + 1);
    } else {
      setShowCongrats(true); // Show congratulations modal after the last level
    }
  };

  const handleExitGame = () => {
    setLevels([]);
    setCurrentLevel(0);
    setWinCount(0);
    setLossCount(5);
    setMessage("");
    setGuessedLetters([]);
    setGameOver(false);
    navigate("/");
  };

  const handleTryAgain = async () => {
    await fetchLevels();
    initLevel();
  };

  const renderWord = () => {
    if (levels.length === 0) return null;

    const word = levels[currentLevel];
    return word.split("").map((letter, index) => (
      <span key={index} className="inline-block w-8 h-8 border-2 border-gray-500 text-center">
        {guessedLetters.includes(letter.toUpperCase()) || gameOver
          ? letter.toUpperCase()
          : "_"}
      </span>
    ));
  };

  const renderLetters = () => {
    const rows = [
      "AJCDEFGH",
      "IBKLMVN",
      "QRSTU",
      "YZOP",
      "XW",
      " ",
    ];

    const fontStyles = [
      "font-serif",
      "font-sans",
      "font-mono",
      "font-bold",
      "italic",
      "underline"
    ];

    const backgroundColors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-orange-500",
    ];

return rows.map((row, rowIndex) => (
    <div key={rowIndex} className="flex justify-center mb-2">
      {row.split("").map((letter, letterIndex) => (
        <button
          key={letter}
          className={`m-1 p-2 w-10 h-10 rounded-full text-white ${backgroundColors[letterIndex % backgroundColors.length]} border border-transparent ${
            guessedLetters.includes(letter) || gameOver
              ? "bg-gray-300 cursor-not-allowed"
              : `hover:text-white hover:border-black`
          } ${fontStyles[letterIndex % fontStyles.length]}`}
          disabled={guessedLetters.includes(letter) || gameOver}
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  ));
};
  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute top-10 left-64 p-4 border border-black shadow-xl bg-blue-300 rounded-xl z-10" data-aos="fade-down">
        <div className="text-xl font-mono">Level: {currentLevel + 1}</div>
        <div className="text-xl font-mono">Score: {score}</div>
      </div>
      <div className="absolute top-36 left-64 px-9 py-4 border border-black shadow-xl bg-blue-300 rounded-xl z-10" data-aos="fade-down">
        <div className="font-black text-2xl text-red-700"><FavoriteRoundedIcon className="text-red-600"/>{lossCount}</div>
      </div>
      <div className="absolute top-6 right-80 p-4 text-xl z-10">
        <HelpTwoToneIcon fontSize="large" className="text-yellow-600 cursor-pointer" onClick={() => setShowHelp(true)} />
      </div>
      <div
        className="relative z-10 bg-cyan-400 bg-opacity-70 p-8 rounded-xl shadow-2xl text-center"
        data-aos="flip-right"
      >
        <div className="mb-4 space-x-1">{renderWord()}</div>
        <div className="mb-4 text-lg">{message}</div>
        {renderLetters()}
        <div className="mt-4 space-x-4">
          {gameOver && lossCount === 0 && (
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={handleTryAgain}
            >
              Retry
            </button>
          )}
          {gameOver && winCount === levels[currentLevel].length && (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={handleNextLevel}
            >
              {currentLevel < 4 ? "Go to Next Level" : "Finish Game"}
            </button>
          )}
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleExitGame}
          >
            Exit
          </button>
        </div>
      </div>

      {/* Help Pop-up */}
      {showHelp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="relative bg-cyan-100 p-8 rounded-md shadow-md w-1/2 text-center">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <p className="text-sm text-left">
              Welcome to the Word Guessing Game! Here's how it works:
              <ul className="list-disc ml-6 mt-2 text-left">
                <li>Guess the Word: Each word is shown as a series of dashes, with each dash representing a letter.</li>
                <li>Chances: You have 5 chances to guess the word correctly.</li>
                <li>Word Management: Correctly guessed words are removed from the list, so you won't see them again.</li>
                <li>Scoring: Your score increases with each correct guess, and we'll display your updated score after each round.</li>
              </ul>
              <span className="ml-48 text-lg font-bold">Good luck and have fun!</span>
            </p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowHelp(false)}
            >
              <CancelPresentationTwoToneIcon fontSize="large" className="text-red-700" />
            </button>
          </div>
        </div>
      )}

      {/* Congratulations Pop-up */}
      {showCongrats && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="relative bg-green-100 p-8 rounded-md shadow-md w-1/2 text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg mb-4">You've successfully completed all 5 levels!</p>
            <p className="text-lg mb-4">Your final score is: {score}</p>
            <p className="text-sm text-left">
              Thank you for playing the Word Guessing Game. We hope you enjoyed it! Feel free to play again or share your score with friends.
            </p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => {
                setShowCongrats(false);
                handleExitGame();
              }}
            >
              <CancelPresentationTwoToneIcon fontSize="large" className="text-red-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;