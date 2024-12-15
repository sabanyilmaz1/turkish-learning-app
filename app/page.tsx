import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book, BookText, Languages } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Apprendre le Turc
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Votre compagnon d&apos;apprentissage de la langue turque
          </p>
        </div>

        <div className="grid gap-6">
          <Link href="/flashcards" className="block">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-500/50 dark:hover:border-indigo-400/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Book className="w-5 h-5 text-indigo-500" />
                  Flash Cards
                </CardTitle>
                <CardDescription>
                  Apprenez le vocabulaire turc avec des cartes mémoire
                  interactives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                  Commencer
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/grammaire" className="block">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-500/50 dark:hover:border-indigo-400/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookText className="w-5 h-5 text-indigo-500" />
                  Grammaire
                </CardTitle>
                <CardDescription>
                  Maîtrisez les règles grammaticales de la langue turque
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                  Apprendre
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/traduction" className="block">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-500/50 dark:hover:border-indigo-400/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-indigo-500" />
                  Traduction
                </CardTitle>
                <CardDescription>
                  Pratiquez la traduction de phrases du français vers le turc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                  Traduire
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
