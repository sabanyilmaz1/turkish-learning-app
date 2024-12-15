import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Translation() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Traduction</h1>
      
      <div className="max-w-2xl mx-auto">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-lg font-medium">Traduisez en turc :</p>
              <p className="text-2xl">&quot;Bonjour, comment allez-vous ?&quot;</p>
              
              <div className="pt-4">
                <textarea
                  className="w-full p-4 border rounded-md h-32"
                  placeholder="Écrivez votre traduction ici..."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Voir la solution</Button>
          <Button>Phrase suivante</Button>
        </div>
      </div>
    </main>
  )
}
