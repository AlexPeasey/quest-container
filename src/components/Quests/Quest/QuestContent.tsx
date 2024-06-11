import { ReactNode } from "react";

interface QuestContentProps {
  title: string;
  description: ReactNode;
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
