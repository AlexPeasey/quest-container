import { useEffect, useState } from "react";
import "./app.scss";
import Quest from "./components/quests/Quest";


const App: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/quests").then((response) => response.json().then((data) => setQuests(data)));
  });
  
  return (
    <div>
      <ul>
        {quests.map((quest) => (
          <Quest key={quest.id} quest={quest} />
        ))}
      </ul>
    </div>
  );
};

export default App;
