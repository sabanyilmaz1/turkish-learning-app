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
        <nav className="bg-primary text-primary-foreground p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              TurkishLearner
            </Link>
            <div className="space-x-4">
              <Link href="/flashcards">
                <button>Flashcards</button>
              </Link>
              <Link href="/grammar">
                <button>Grammaire</button>
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
