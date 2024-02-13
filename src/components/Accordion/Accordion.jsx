import { useContext, useState, createContext } from "react";
import AccordionItem from "./AccordionItems";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("cant use without <Accordion> wrapping");
  }
  return ctx;
}

export default function Accordion({ children, classname }) {
  const [openItemId, setOpenItemId] = useState();
  function toggleItem(id) {
    setOpenItemId((prevItem) => (prevItem === id ? null : id));
  }
  const contextValue = {
    openItemId, //value
    toggleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={classname}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
