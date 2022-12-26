import Heading from "../common/Heading";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";

const contacts = [
  {
    icon: <FontAwesomeIcon icon="location-dot" />,
    title: "Address",
    info: {
      link: false,
      text: "198 West 21th Street, Suite 721 New York NY 10016",
    },
  },
  {
    icon: <FontAwesomeIcon icon="phone" />,
    title: "Contact Number",
    info: { link: "phone", text: "+ 1235 2355 98" },
  },
  {
    icon: <FontAwesomeIcon icon="paper-plane" />,
    title: "Email Address",
    info: { link: "email", text: "info@yoursite.com" },
  },
  {
    icon: <FontAwesomeIcon icon="earth" />,
    title: "Website",
    info: { link: "website", text: "yoursite.com" },
  },
];

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <Heading text={"Contact Me"} />
        <div className="slogan">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </div>
        <div className="contact-top-wrapper">
          {contacts.map((item, index) => {
            return (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                info={item.info}
              />
            );
          })}
        </div>
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
