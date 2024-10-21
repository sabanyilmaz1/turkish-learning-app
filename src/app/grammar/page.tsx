import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const grammarRules = [
  {
    title: "L'ordre des mots en turc",
    content:
      "En turc, l'ordre des mots de base est Sujet-Objet-Verbe (SOV). Par exemple : 'Ben elma yerim' (Je mange une pomme).",
    examples: [
      { turkish: "Ben kitap okuyorum", french: "Je lis un livre" },
      { turkish: "O çay içiyor", french: "Il/Elle boit du thé" },
    ],
  },
  {
    title: "Les suffixes de possession",
    content:
      "En turc, on utilise des suffixes pour indiquer la possession, plutôt que des pronoms possessifs séparés.",
    examples: [
      { turkish: "Evim", french: "Ma maison" },
      { turkish: "Kitabın", french: "Ton livre" },
      { turkish: "Arabası", french: "Sa voiture" },
    ],
  },
  {
    title: "La négation",
    content:
      "Pour former la négation en turc, on ajoute généralement le suffixe '-me' ou '-ma' au verbe.",
    examples: [
      { turkish: "Biliyorum", french: "Je sais" },
      { turkish: "Bilmiyorum", french: "Je ne sais pas" },
      { turkish: "Gelmedi", french: "Il/Elle n'est pas venu(e)" },
    ],
  },
];

export default function Grammar() {
  return (
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Grammaire Turque</h1>
      <Accordion type="single" collapsible className="w-full">
        {grammarRules.map((rule, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{rule.title}</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{rule.content}</p>
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="list-disc pl-6">
                {rule.examples.map((example, i) => (
                  <li key={i}>
                    <span className="font-medium">{example.turkish}</span> -{" "}
                    {example.french}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
