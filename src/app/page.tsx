import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Apprendre le Turc</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Flashcards de Vocabulaire</CardTitle>
            <CardDescription>
              Pratiquez votre vocabulaire turc avec des flashcards interactives.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/flashcards">
              <Button className="w-full">Commencer les Flashcards</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Grammaire Turque</CardTitle>
            <CardDescription>
              Apprenez les règles de grammaire turque avec des exemples.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/grammar">
              <Button className="w-full">Explorer la Grammaire</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
