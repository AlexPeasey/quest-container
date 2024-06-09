import { useEffect, useState } from "react";
import Quest from "../Quest/Quest";
import Tooltip from "../../Tooltip";
import "./QuestsContainer.scss";

const QuestsContainer: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/quests").then((response) => response.json().then((data) => setQuests(data)));
  });

  return (
    <div className="quests-wrapper">
      <div className="quests__heading">
        <h2>Quests</h2>
        <Tooltip content="Here you will find a list of important quests!" />
      </div>
      <div className="quests-container">
        <ul className="quests-container__list">
          {quests.map((quest) => (
            <Quest key={quest.id} quest={quest} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestsContainer;
