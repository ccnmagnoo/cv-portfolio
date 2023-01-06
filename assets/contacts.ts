import { Contact } from "../model/Contact.inteface";

export const contacts: { [id: string]: Contact } = {
  email: {
    contact: "ccampos@dvt.cl",
    address:
      "mailto:ccampos@dvt.cl?subject=Hi Carlos, nice profile webpage&body=Dear Carlos, I would like to contact you".replace(
        " ",
        "%20"
      ),
    icon: "https://api.iconify.design/eva/email-outline.svg",
    variant: "email",
  },
  whatsapp: {
    contact: "+56 948 611 376",
    address:
      'https://wa.me/56948611376/?text=Hi Carlos,I"m writing your from your landing web page'.replace(
        " ",
        "%20"
      ),
    icon: "https://api.iconify.design/akar-icons/whatsapp-fill.svg",
    variant: "phone",
  },
  linkedIn: {
    contact: "linkedIn",
    address: "https://www.linkedin.com/in/crcamposn/?locale=en_US",
    icon: "https://api.iconify.design/brandico/linkedin-rect.svg",
    variant: "social",
  },

  gitHub: {
    contact: "gitHub repository",
    address: "https://github.com/ccnmagnoo/cv-portfolio",
    icon: "https://api.iconify.design/mdi/github.svg",
    variant: "social",
  },
};
