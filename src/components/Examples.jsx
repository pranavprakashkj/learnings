import { useState } from "react";
import TabButton from "./TabBotton";
import { EXAMPLES } from "../data";
import Sections from "./Sections";
import Tabs from "./Tabs";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();

    function HandleSelect(selected) {
        setSelectedTopic(selected)
        console.log(selectedTopic)

    }

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
    return (
        <Sections id='examples' title='Example'>
            {/* <h2></h2> */}
            <Tabs buttons={
                <>
                    <TabButton onClick={() => HandleSelect('components')} isSelected={selectedTopic === 'components'}>components</TabButton>
                    <TabButton onClick={() => HandleSelect('jsx')} isSelected={selectedTopic === 'jsx'} >JSX</TabButton>
                    <TabButton onClick={() => HandleSelect('props')} isSelected={selectedTopic === 'props'}>props</TabButton>
                    <TabButton onClick={() => HandleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
                </>
            }
                buttonsContainer='menu'
            >
                {tabContent}
            </Tabs>

        </Sections>
    )
}

export default Examples;