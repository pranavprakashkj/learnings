import CoreComponent from "./CoreComponents/CoreComponents";
import data from '../data'

export default function CoreConcepts() {
    return (
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
    )
}