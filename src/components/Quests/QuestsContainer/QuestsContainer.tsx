import { useEffect, useState } from "react";
import Quest from "../Quest/Quest";
import Tooltip from "../../Tooltip";

const QuestsContainer: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/quests").then((response) => response.json().then((data) => setQuests(data)));
  });

  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="quests-wrapper">
      <div className="quests__heading">
        <h2>Quests</h2>
        <Tooltip content="Here you will find a list of important quests!" />
      </div>
      <div className="quests-container">
        <ul className="quests-container__list">
          {quests.map((quest) => (
            <li key={quest.id}>
              <Quest quest={{ ...quest, due_date: formatDate(quest.due_date) }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestsContainer;
