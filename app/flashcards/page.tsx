"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { flashcards } from "@/data/flashcards";
import { useFlashcards } from "@/hooks/useFlashcards";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";

import { Home } from "lucide-react";

export default function FlashCards() {
  const [startWithFrench, setStartWithFrench] = useState(true);
  const {
    currentCard,
    isFlipped,
    setIsFlipped,
    handleSuccess,
    handleFailure,
    displayFront,
    displayBack,
    toggleMode,
    remainingCards,
    progress,
    mode,
  } = useFlashcards(flashcards, startWithFrench);

  const playAudio = (text: string, language: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language; // Définir la langue sur le turc
    speechSynthesis.speak(utterance);
  };

  if (!currentCard) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto text-center"
        >
          <h1 className="text-3xl font-bold mb-4">🎉 Félicitations !</h1>
          <p className="text-zinc-600 dark:text-zinc-300 mb-6">
            Vous avez terminé toutes les cartes disponibles.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Recommencer
          </Button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 sm:mb-8"
        >
          <div className="w-full sm:w-auto">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
          <div className="text-center w-full sm:w-auto">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              Flash Cards
            </h1>
          </div>
          <div className="w-full sm:w-auto flex justify-center">
            <Button
              variant="outline"
              onClick={() => {
                setStartWithFrench(!startWithFrench);
                toggleMode();
              }}
              className="text-sm"
            >
              Mode: {startWithFrench ? "FR → TR" : "TR → FR"}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-4"
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            Cartes restantes : {remainingCards} | Succès : {progress}/5
          </p>
        </motion.div>

        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
            <Card
              className={`${styles.cardFace} relative cursor-pointer bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-2 hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <CardContent className="flex items-center justify-center h-full p-8">
                <div className="text-center w-full">
                  <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                    {displayFront}
                  </p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      Cliquez pour révéler
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className={`${styles.cardFace} ${styles.cardBack} relative cursor-pointer bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-2 hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <CardContent className="flex items-center justify-center h-full p-8">
                <div className="text-center w-full">
                  <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                    {displayBack}
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {currentCard.context}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                      {currentCard.exemple}
                    </p>
                  </motion.div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      Cliquez pour retourner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {!isFlipped && (
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => playAudio(displayFront, mode ? "FR" : "TR")}
              className=""
            >
              Écouter
            </Button>
          </div>
        )}

        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-4 mt-8"
          >
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => playAudio(displayBack, mode ? "TR" : "FR")}
                className=""
              >
                Écouter
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={handleFailure}
              className="border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-300"
            >
              Je ne savais pas
            </Button>
            <Button
              onClick={handleSuccess}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Je savais
            </Button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
