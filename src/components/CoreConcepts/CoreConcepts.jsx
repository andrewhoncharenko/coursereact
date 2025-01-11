import CoreConcept from "../CoreConcept";
import Section from "../Section";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
    const items =  CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item}/>);
    return (
        <Section id="core-concepts" title="Core Concepts">
          <ul>
            {items}
          </ul>
        </Section>
    );
}