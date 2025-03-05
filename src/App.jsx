

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";

import CoreConcept from "./components/CoreConcepts";



function App() {
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
      </main>
    </div>
  );
}

export default App;
