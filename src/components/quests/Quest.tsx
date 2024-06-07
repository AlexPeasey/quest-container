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
    <div>
      <div className="image-wrap">
        {quest?.company?.logo_url && <img src={quest.company.logo_url} alt="Company Logo" />}
      </div>
      <div className="content-wrap">
        <h2 className="quest-title">{quest.type}</h2>
        <p className="description"></p>
      </div>
    </div>
  );
};

export default Quest;
