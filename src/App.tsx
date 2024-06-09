import "./styles/App.scss";
import QuestsContainer from "./components/Quests/QuestsContainer/QuestsContainer";

const App: React.FC = () => {
  return (
    <div className="app">
      <QuestsContainer />
    </div>
  );
};

export default App;
