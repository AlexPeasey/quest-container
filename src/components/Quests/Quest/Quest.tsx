import "./Quest.scss";

interface Quest {
  type: string;
  description: string;
  company: Company;
  id: string;
}

interface Company {
  name: string;
  logo_url: string;
}

interface QuestPropTypes {
  quest: Quest;
}

const Quest: React.FC<QuestPropTypes> = ({ quest }) => {
  return (
    <div className="quest">
      <div className="quest__image-wrap">
        {quest?.company?.logo_url && <img src={quest.company.logo_url} alt="Company Logo" className="quest__image"/>}
      </div>
      <div className="quest__content-wrap">
        <h2 className="quest__title">{quest.type}</h2>
        <p className="quest__description"></p>
      </div>
    </div>
  );
};

export default Quest;
