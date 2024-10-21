"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Rotate3D } from "lucide-react";
import { flashcards } from "./data";

export default function Flashcards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showFront, setShowFront] = useState(true);

  console.log(flashcards.length);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowFront(true);
  };

  const prevCard = () => {
    setCurrentCard(
      (prev) => (prev - 1 + flashcards.length) % flashcards.length
    );
    setShowFront(true);
  };

  const flipCard = () => {
    setShowFront((prev) => !prev);
  };

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Flashcards de Vocabulaire Turc
      </h1>
      <Card className="w-full mx-auto">
        <CardContent className="p-6">
          <div
            className="aspect-[3/2] flex items-center justify-center text-2xl font-bold cursor-pointer"
            onClick={flipCard}
          >
            {showFront
              ? flashcards[currentCard].front
              : flashcards[currentCard].back}
          </div>
          {!showFront && <p>{flashcards[currentCard].exemple}</p>}
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 gap-2">
        <Button onClick={prevCard}>
          <ArrowLeft className="mr-2" /> Précédent
        </Button>
        <Button onClick={flipCard}>
          <Rotate3D className="mr-2" /> Retourner
        </Button>
        <Button onClick={nextCard}>
          Suivant <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
