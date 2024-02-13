import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error("must be wrapped with <Accordion.Item>");
  }

  return ctx;
}

export default function AccordionItem({ id, classname, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={classname}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
