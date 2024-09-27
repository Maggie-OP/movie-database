import Accordion from "../accordion/Accordion";
import AccordionContentLabel from "../accordion/AccordionContentLabel";

export default function SearchSidebar() {
  return (
    <section className="max-w-[260px] w-full">
      <Accordion title="Sort">
        <div>
          <AccordionContentLabel label="Sort Results By" info="lll" />
        </div>
      </Accordion>
    </section>
  );
}
