import CoreConcept from "../CoreConcept";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
    const items =  CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item}/>);
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {items}
          </ul>
        </section>
    );
}