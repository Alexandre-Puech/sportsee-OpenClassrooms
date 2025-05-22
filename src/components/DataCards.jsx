import "../styles/css/Datacards.css";
import { USER_MAIN_DATA } from "../data/data.js";
import Card from "./Card.jsx";
import calories from "../assets/cards-logos/calories-logo.svg";
import proteins from "../assets/cards-logos/proteins-logo.svg";
import carbs from "../assets/cards-logos/carbs-logo.svg";
import lipids from "../assets/cards-logos/lipids-logo.svg";

const userId = 18;
const data = USER_MAIN_DATA.find((user) => user.id === userId);
const keyData = data.keyData;

function DataCards() {
  return (
    <div className="cards-container">
      <Card
        className="calories"
        image={calories}
        value={`${keyData.calorieCount}kCal`}
        type="Calories"
      />
      <Card
        className="proteins"
        image={proteins}
        value={`${keyData.proteinCount}g`}
        type="Protéines"
      />
      <Card
        className="carbs"
        image={carbs}
        value={`${keyData.carbohydrateCount}g`}
        type="Glucides"
      />
      <Card
        className="lipids"
        image={lipids}
        value={`${keyData.lipidCount}g`}
        type="Lipides"
      />
    </div>
  );
}
export default DataCards;
