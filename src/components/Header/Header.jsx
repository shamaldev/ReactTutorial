import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";
const randomDescription = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function Header() {
  const description = randomDescription[getRandomInt(3)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
