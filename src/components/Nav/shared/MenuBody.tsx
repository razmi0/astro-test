import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/Accordion";
import List from "./List";
import ListElement from "./ListElement";
import Trigger from "./Trigger";
import { links, lorems } from "./data";

export default function MenuBody() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={links[1].label} key={links[1].label} className="items-center">
        <Trigger iconName="activities" iconClass="-translate-y-[2px]">
          Activités et tarifs
        </Trigger>
        <AccordionContent asChild>
          <List>
            {lorems.map((label) => (
              <ListElement key={label}>{label}</ListElement>
            ))}
          </List>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={links[3].label} key={links[3].label} className="items-center">
        <Trigger iconName="faq" iconClass="-translate-y-[2px]">
          FAQ
        </Trigger>
        <AccordionContent asChild>
          <List>
            {lorems.map((label) => (
              <ListElement key={label}>{label}</ListElement>
            ))}
          </List>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
