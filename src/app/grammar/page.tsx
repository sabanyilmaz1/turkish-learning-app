import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { grammarRules } from "./data";

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
                  <li className=" py-1" key={i}>
                    <span className="font-bold">{example.turkish}</span> -{" "}
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
