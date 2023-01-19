import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "udbh2",
      label: "Can I use react on a project?",
      content: "Yes u can use react",
    },
    {
      id: "ki8ww2",
      label: "Can I use javascript on a project?",
      content: "Yes u can use javascript",
    },
    {
      id: "popiws98",
      label: "Can I use CSS on a project?",
      content: "Yes u can use CSS",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
