import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItems";

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
