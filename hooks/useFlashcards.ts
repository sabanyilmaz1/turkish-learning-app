import { useState, useEffect } from "react";
import { Flashcard } from "@/data/flashcards";

const MAX_SUCCESS_COUNT = 5;

export const useFlashcards = (
  cards: Flashcard[],
  startWithFrench: boolean = true
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState(startWithFrench);
  const [flashcardsProgress, setFlashcardsProgress] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    // Charger la progression depuis le localStorage
    const savedProgress = localStorage.getItem("flashcardsProgress");
    if (savedProgress) {
      setFlashcardsProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (progress: { [key: string]: number }) => {
    localStorage.setItem("flashcardsProgress", JSON.stringify(progress));
    setFlashcardsProgress(progress);
  };

  const filteredCards = cards.filter(
    (card) =>
      !flashcardsProgress[card.front] ||
      flashcardsProgress[card.front] < MAX_SUCCESS_COUNT
  );

  const handleSuccess = () => {
    const currentCard = filteredCards[currentIndex];
    const newProgress = {
      ...flashcardsProgress,
      [currentCard.front]: (flashcardsProgress[currentCard.front] || 0) + 1,
    };
    saveProgress(newProgress);
    nextCard();
  };

  const handleFailure = () => {
    const currentCard = filteredCards[currentIndex];
    const newProgress = {
      ...flashcardsProgress,
      [currentCard.front]: 0,
    };
    saveProgress(newProgress);
    nextCard();
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((current) =>
      current + 1 >= filteredCards.length ? 0 : current + 1
    );
  };

  const toggleMode = () => {
    setMode(!mode);
    setIsFlipped(false);
  };

  const currentCard = filteredCards[currentIndex];
  const displayFront = mode ? currentCard?.back : currentCard?.front;
  const displayBack = mode ? currentCard?.front : currentCard?.back;

  return {
    currentCard,
    isFlipped,
    setIsFlipped,
    handleSuccess,
    handleFailure,
    nextCard,
    toggleMode,
    displayFront,
    displayBack,
    remainingCards: filteredCards.length,
    progress: flashcardsProgress[currentCard?.front] || 0,
    mode,
  };
};
