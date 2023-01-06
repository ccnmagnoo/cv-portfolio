import React from "react";
import { AppContext } from "../../redux/context";
import { ContactItem } from "./ContactItem";

export const ContactInfo = () => {
  const context = React.useContext(AppContext);
  const { contact } = context;

  return (
    <article className="contactPanel">
      <ContactItem item={contact?.email} />
      <ContactItem item={contact?.whatsapp} />
      <ContactItem item={contact?.linkedIn} />
      <ContactItem item={contact?.gitHub} />
    </article>
  );
};
