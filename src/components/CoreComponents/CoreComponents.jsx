import './CoreComponents.css'
function CoreComponent({ image, description, title }) {  // or just props as argument
    return (
        <li>
            <img src={image} alt={title} /> {/* or src={props.image} */}
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default CoreComponent;