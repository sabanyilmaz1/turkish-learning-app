import { Button } from "@/components/ui/button";
import "./globals.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <nav className="bg-primary hidden lg:block text-primary-foreground p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              TurkishLearner
            </Link>
            <div className="space-x-4">
              <Link href="/flashcards">
                <Button variant="secondary">Flashcards</Button>
              </Link>
              <Link href="/grammar">
                <Button variant="secondary">Grammaire</Button>
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
