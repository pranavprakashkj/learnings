import img from '../../assets/react-core-concepts.png'
import './Header.css'
const value = ['Fundamental', 'Core', 'Crucial']

function genRand(max) {
    return Math.floor(Math.random() * (max + 1))

}


export default function Header() {
    const exp = value[genRand(2)];
    return (
        <header>
            <img src={img} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {exp} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>)
}