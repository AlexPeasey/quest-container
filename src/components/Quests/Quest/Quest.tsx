import { ReactNode } from "react";
import QuestContent from "./QuestContent";

interface Quest {
  id: string;
  type: string;
  description: ReactNode;
  company: Company | null; // Company might be null
  job: Job;
  due_date: string;
  contact: Contact;
}

interface Company {
  name: string;
  logo_url: string;
  linkedin_url: string;
}

interface Job {
  title: string;
}

interface Contact {
  first_name: string;
  last_name: string;
  profile_image: string;
  linkedin_url: string;
}

interface QuestPropTypes {
  quest: Quest;
}

const Quest: React.FC<QuestPropTypes> = ({ quest }) => {
  let title = "";
  let description: React.ReactNode = "";
  let imageSrc = "";

  switch (quest.type) {
    case "install_extension":
      title = "Install the CareerOS Chrome Extension";
      description =
        "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from LinkedIn and other job boards. It also lets you access our messaging template and send LinkedIn messages directly from CareerOS.";
      imageSrc = "src/assets/download-icon.svg";
      break;
    case "submit_application":
      title = `Submit your application for ${quest.job.title} at ${quest.company?.name}`;
      description = `Deadline: ${quest.due_date}`;
      imageSrc = "src/assets/contact-icon.svg";
      break;
    case "resolve-comment":
      title = `Resolve a comment from [CA name]`;
      description = `You have an unresolved comment from your Career Advisor.`;
      imageSrc = "src/assets/chat-icon.svg";
      break;
    case "save_first_company":
      title = `Save your first company`;
      description = `Browse our company database for your favorite companies or new inspiration and save your first company to get started.`;
      imageSrc = "src/assets/bookmark-icon.svg";
      break;
    case "add_contact":
      title = `Save your first contact`;
      description = `Saving contacts is the first step to networking.`;
      imageSrc = "src/assets/save-contact-icon.svg";
      break;
    case "send_linkedin_message":
      title = `Send a LinkedIn message to ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name}`;
      description = `Send a customized LinkedIn message to reach out to your new contact.
      Don't worry! We'll help you with the wording.`;
      imageSrc = quest.contact?.profile_image || "src/assets/chat-icon.svg";
      break;
    case "send_linkedin_connection":
      title = `Send a LinkedIn invitation to ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name}`;
      description = `Send an invitation with a tailored message to your new contact. Our AI will help you!`;
      imageSrc = quest.contact?.profile_image || "src/assets/save-contact-icon.svg";
      break;
    case "send_first_email":
      title = `Send first email to ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name}`;
      description = `Send a first email to ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name} to get a conversation started.`;
      imageSrc = quest.contact?.profile_image || "src/assets/contact-icon.svg";
      break;
    case "add_new_contact":
      title = `Save a new contact at ${quest.company?.name}`;
      description = `Add another contact to this company to start networking.`;
      imageSrc = quest.company?.logo_url || "src/assets/save-contact-icon.svg";
      break;
    case "schedule_coffee_chat":
      title = `Schedule a coffee chat with ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name}`;
      description = (
        <>
          Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use
          our{" "}
          <a href="https://www.careerostips.com/coffee-chat" target="_blank" rel="noopener noreferrer">
            coffee chat tips
          </a>{" "}
          to prepare for your meeting.
        </>
      );
      imageSrc = quest.company?.logo_url || "src/assets/save-contact-icon.svg";
      break;
    case "send_follow_up_email":
      title = `Send follow-up email to ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name}`;
      description = `Send a follow-up email to ${quest.contact?.first_name} ${quest.contact?.last_name} at ${quest.company?.name} to get a conversation started.`;
      imageSrc = quest.company?.logo_url || "src/assets/save-contact-icon.svg";
      break;
    default:
      title = quest.type;
      description = quest.description;
      imageSrc = quest.company?.logo_url || "";
      break;
  }

  return (
    <div className="quest">
      <div className="quest__image-wrap">
        <img src={imageSrc} alt={quest.type} />
      </div>
      <div className="quest__content-wrap">
        <QuestContent title={title} description={description} />
      </div>
      <div className="quest__button-wrap">
        <a href={quest.company?.linkedin_url} target="_blank" className="quest__button">
          <img src="src/assets/arrow-45.svg" alt="" className="quest__visit-link" />
        </a>
      </div>
    </div>
  );
};

export default Quest;
