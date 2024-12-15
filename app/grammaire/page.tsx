"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { grammarRules } from "@/data/grammar";
import { motion } from "framer-motion";
import { ChevronDown, Home } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GrammarPage() {
  const [expandedRules, setExpandedRules] = useState<number[]>([]);

  const toggleRule = (index: number) => {
    setExpandedRules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
            Grammaire Turque
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Apprenez les règles essentielles de la grammaire turque
          </p>
        </div>

        <div className="grid gap-6">
          {grammarRules.map((rule, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-500/50 dark:hover:border-indigo-400/50"
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleRule(index)}
              >
                <CardTitle className="flex items-center justify-between">
                  <span>{rule.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedRules.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </CardTitle>
              </CardHeader>
              {expandedRules.includes(index) && (
                <CardContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      <ReactMarkdown>{rule.content}</ReactMarkdown>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-indigo-500 dark:text-indigo-400">
                        Exemples :
                      </h3>
                      <div className="space-y-3">
                        {rule.examples.map((example, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-lg bg-white/50 dark:bg-zinc-800/50 space-y-2"
                          >
                            <p className="font-medium text-zinc-800 dark:text-zinc-200">
                              {example.turkish}
                            </p>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {example.french}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
