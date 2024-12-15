"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { translations } from "@/data/translations";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function TranslationPage() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const currentWeek = translations[currentWeekIndex];

  const nextWeek = () => {
    setCurrentWeekIndex((prev) =>
      prev === translations.length - 1 ? prev : prev + 1
    );
  };

  const previousWeek = () => {
    setCurrentWeekIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              Retour à l&apos;accueil
            </Button>
          </Link>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Exercices de Traduction
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Pratiquez la traduction avec des phrases courantes
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={previousWeek}
            disabled={currentWeekIndex === 0}
            className="w-[120px]"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
              {currentWeek.title}
            </h2>
          </div>
          <Button
            variant="outline"
            onClick={nextWeek}
            disabled={currentWeekIndex === translations.length - 1}
            className="w-[100px]"
          >
            Suivant
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {currentWeek.translations.map((translation, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-0"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex-1 text-left">
                    <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
                      {translation.french}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    <div className="p-4 rounded-lg bg-white/50 dark:bg-zinc-800/50">
                      <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                        {translation.turkish}
                      </p>
                    </div>
                    {translation.explanation && (
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                        {translation.explanation}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="flex justify-center gap-2">
          {translations.map((week, index) => (
            <Button
              key={index}
              variant={currentWeekIndex === index ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentWeekIndex(index)}
              className={`${
                currentWeekIndex === index
                  ? "bg-indigo-500 text-white"
                  : "text-zinc-600"
              }`}
            >
              Devoirs {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
