import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept"
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton";
function App() {
  const items =  CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item}/>);
  return (
    <div>
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
