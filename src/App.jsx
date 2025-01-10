import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept"
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const items =  CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item}/>);
  const tabs = CORE_CONCEPTS.map(item =>
    <TabButton key={item.title} isSelected={selectedTopic === item.title.toLowerCase()} onSelect={() => handleSelect(item.title.toLowerCase())}>
      {item.title}
    </TabButton>);
  let tabContent = <p>Please select a topic.</p>;

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  
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
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {items}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabs}
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
