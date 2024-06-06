import { useEffect, useState } from "react";
import "./app.scss";

interface Quest {
  name: string;
  id: string;
}

const App: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/quests").then((response) => response.json().then((data) => setQuests(data)));
  });
  console.log(quests)
  return (
    <div>
      <ul>
        {quests.map((quest) => (
          <li key={quest.id}>{quest.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
