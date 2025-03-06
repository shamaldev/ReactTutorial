import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import { useState } from "react";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(SelectedButton) {
    setSelectedTopic(SelectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                img={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Select a topic to see an example</p> :<div id="tab-content">
          
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>}
          
        </section>
      </main>
    </div>
  );
}

export default App;
