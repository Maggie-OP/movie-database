import Accordion from "/components/accordion";
import AccordionContentLabel from "/components/accordion-content-label";
import AccordionContentItem from "/components/accordion-content-item";
import CustomSelect from "/components/custom-select";
import CustomRadio from "/components/custom-radio";
import CustomCheckbox from "/components/custom-checkbox";
import { SearchButton } from "./styles";

import { Genre } from "/app/movies/types";
import { SHOW_ME_OPTIONS, SORT_BY_OPTIONS } from "/utils/constants";

interface SearchSidebarProps {
  genres: Genre[];
}

export default function SearchSidebar({ genres }: SearchSidebarProps) {
  return (
    <>
      <Accordion title="Sort">
        <AccordionContentItem>
          <AccordionContentLabel label="Sort Results By" info="lll" />
          <CustomSelect options={SORT_BY_OPTIONS} name="sort_by" id="sort_by" />
        </AccordionContentItem>
      </Accordion>
      <Accordion title="Filter">
        <AccordionContentItem>
          <AccordionContentLabel label="Show me" />
          <CustomRadio options={SHOW_ME_OPTIONS} />
        </AccordionContentItem>
        <AccordionContentItem>
          <AccordionContentLabel label="Genres" />
          <CustomCheckbox name="with_genres" options={genres} />
        </AccordionContentItem>
      </Accordion>
      <SearchButton>Search</SearchButton>
    </>
  );
}
