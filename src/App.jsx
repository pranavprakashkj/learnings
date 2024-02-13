import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion classname="accordion">
          <Accordion.Item id="vacation" classname="accordion-item">
            <Accordion.Title className="accordion-item-title">
              many experiences
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>you can&apos;t go wrong with us</p>
                <p>Vacation vacation</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="locals" classname="accordion-item">
            <Accordion.Title className="accordion-item-title">
              locals here
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>we are with you</p>
                <p>local guides</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyfn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item1", "item2"]} itemKeyfn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
