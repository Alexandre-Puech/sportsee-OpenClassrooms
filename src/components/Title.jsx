import "../styles/css/Title.css";
import { useEffect, useState } from "react";
import { getUserData } from "../api/api";

function Title({ userId, mockedData, subtitle }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserData(userId, mockedData);
      setUser(userData);
    }
    fetchUser();
  });

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="title">
      <div className="title-header">
        <p className="hello">Bonjour</p>
        <p className="name">{user.firstName}</p>
      </div>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
export default Title;
