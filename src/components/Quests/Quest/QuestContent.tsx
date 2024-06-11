interface QuestContentProps {
  title: string;
  description: string;
}

const QuestContent: React.FC<QuestContentProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="quest__title">{title}</h2>
      <p className="quest__description">{description}</p>
    </>
  );
};

export default QuestContent;
