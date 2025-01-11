import { useState } from "react";
import TabButton from "../TabButton";
import Section from "../Section";
import Tabs from "../Tabs";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    const tabs = CORE_CONCEPTS.map(item =>
        <TabButton key={item.title} isSelected={selectedTopic === item.title.toLowerCase()} onClick={() => handleSelect(item.title.toLowerCase())}>
          {item.title}
        </TabButton>);
    let tabContent = <p>Please select a topic.</p>;

    if(selectedTopic) {
        tabContent = <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
              </div>
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    
    return (
        <Section id="examples" title="Examples">
          <Tabs buttons={tabs}>
            {tabContent}
          </Tabs>
        </Section>
    );
}