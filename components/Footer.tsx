import React from "react";
import { AppContext } from "../redux/context";
import { ContactItem } from "./sectionRight/ContactItem";

export const Footer = () => {
  const context = React.useContext(AppContext);
  const { contact } = context;
  return (
    <footer className="footer">
      <ContactItem item={contact?.gitHub} />
      {contact?.gitHub?.contact}
    </footer>
  );
};
