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
        </div>

        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={previousWeek}
            disabled={currentWeekIndex === 0}
            className="w-10 sm:w-[120px]"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline sm:ml-2">Précédent</span>
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
            className="w-10 sm:w-[120px]"
          >
            <span className="hidden sm:inline sm:mr-2">Suivant</span>
            <ChevronRight className="h-4 w-4" />
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

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 min-w-full pb-2">
            {translations.map((week, index) => (
              <Button
                key={index}
                variant={currentWeekIndex === index ? "default" : "outline"}
                onClick={() => setCurrentWeekIndex(index)}
                className="flex-shrink-0 text-sm py-2 h-auto"
              >
                {week.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
