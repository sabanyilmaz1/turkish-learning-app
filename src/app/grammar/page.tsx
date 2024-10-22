import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GrammarRule {
  title: string;
  content: string;
  examples: { turkish: string; french: string }[];
}

const grammarRules: GrammarRule[] = [
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
  {
    title: "-erek / -arak",
    content:
      "Ce type d’ulaç exprime la manière dont une action est réalisée, souvent en indiquant une simultanéité entre deux actions.",
    examples: [
      {
        turkish: "Yürüyerek okula gittim",
        french: "Je suis allé à l'école en marchant",
      },
      {
        turkish: "Koşarak geldim.",
        french: "Je suis venu en courant.",
      },
    ],
  },
  {
    title: " -ip / -ıp / -up / -üp",
    content:
      "Cette forme permet de relier deux actions qui se succèdent de manière très proche",
    examples: [
      {
        turkish: "Kitabı alıp gitti.",
        french: "Il a pris le livre et est parti.",
      },
      {
        turkish: "Yemek yiyip uyudum.",
        french: "J'ai mangé et je me suis endormi.",
      },
    ],
  },
  {
    title: "-ken",
    content: `Ce suffixe est utilisé pour indiquer une action ou un état simultané par rapport à une autre action. Il peut se traduire par "quand" ou "lorsque".`,
    examples: [
      {
        turkish: "Yemek yerken kitap okurum.",
        french: "Je lis un livre en mangeant.",
      },
      {
        turkish: "Ders çalışırken müzik dinlerim.",
        french: "J'écoute de la musique en étudiant.",
      },
    ],
  },
  {
    title: "-ince / -ınca / -ünce / -unca",
    content: `Ce suffixe est utilisé pour indiquer une action qui suit immédiatement une autre action. Il peut se traduire par "après avoir" ou "dès que". Ce suffixe indique une action qui se produit immédiatement après une autre, et peut être traduit par "quand" ou "lorsque".`,
    examples: [
      {
        turkish: "Kapıyı çalınca açtım.",
        french: "J'ai ouvert la porte dès qu'il a sonné.",
      },
      {
        turkish: "Yemek yeyince uyurum.",
        french: "Je dors après avoir mangé.",
      },
      {
        turkish: "Eve gelince dinlendim.",
        french: "Je me suis reposé dès que je suis rentré à la maison.",
      },
    ],
  },
  {
    title: "-meden / -madan",
    content: `Il exprime une action qui n’a pas encore eu lieu ou qui est évitée, et peut être traduit par "sans".`,
    examples: [
      {
        turkish: "Yemeden uyumam.",
        french: "Je ne vais pas dormir sans manger.",
      },
      {
        turkish: "Kitabı okumadan uyumam.",
        french: "Je ne vais pas dormir sans lire le livre.",
      },
    ],
  },
  {
    title: "-meden / -madan + önce",
    content: `Il est utilisé pour exprimer une action qui doit être effectuée avant une autre action. Il peut être traduit par "avant de".`,
    examples: [
      {
        turkish: "Ders çalışmadan önce kahvaltı yaparım.",
        french: "Je prends mon petit-déjeuner avant d'étudier.",
      },

      {
        turkish: "Eve gitmeden önce markete uğradım.",
        french: "Je suis passé au marché avant de rentrer à la maison.",
      },
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
