import "../styles/css/Datacards.css";
import { useEffect, useState } from "react";
import { getUserData } from "../api/api";
import Card from "./Card.jsx";
import calories from "../assets/cards-logos/calories-logo.svg";
import proteins from "../assets/cards-logos/proteins-logo.svg";
import carbs from "../assets/cards-logos/carbs-logo.svg";
import lipids from "../assets/cards-logos/lipids-logo.svg";

function DataCards() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserData(18);
      setUser(userData);
    }
    fetchUser();
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="cards-container">
      <Card
        className="calories"
        image={calories}
        value={`${user.calorieCount}kCal`}
        type="Calories"
      />
      <Card
        className="proteins"
        image={proteins}
        value={`${user.proteinCount}g`}
        type="Protéines"
      />
      <Card
        className="carbs"
        image={carbs}
        value={`${user.carbohydrateCount}g`}
        type="Glucides"
      />
      <Card
        className="lipids"
        image={lipids}
        value={`${user.lipidCount}g`}
        type="Lipides"
      />
    </div>
  );
}
export default DataCards;
