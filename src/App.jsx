import Header from './components/Header/Header';
import CoreComponent from './components/CoreComponents/CoreComponents';
import data from './data'
import TabButton from './components/TabBotton';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>select a topic</p>

  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>

    </div>
  }

  function HandleSelect(selected) {
    setSelectedTopic(selected)
    console.log(selectedTopic)

  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>
          <ul>
            {data.map((item) => (<CoreComponent key={item.title} {...item} />)
            )}
            {/* <CoreComponent {...data[0]} />
            <CoreComponent title={data[1].title}
              description={data[1].description}
              image={data[1].image} />
            <CoreComponent {...data[2]} />
            <CoreComponent {...data[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>

          <menu >
            <TabButton onSelect={() => HandleSelect('components')} isSelected={selectedTopic === 'components'}>components</TabButton>
            <TabButton onSelect={() => HandleSelect('jsx')} isSelected={selectedTopic === 'jsx'} >JSX</TabButton>
            <TabButton onSelect={() => HandleSelect('props')} isSelected={selectedTopic === 'props'}>props</TabButton>
            <TabButton onSelect={() => HandleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          {tabContent}

        </section>

      </main>
    </div>
  );
}

export default App;
