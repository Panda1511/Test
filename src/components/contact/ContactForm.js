import { aboutImage } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <LazyLoadImage
        effect="blur"
        placeholderSrc={aboutImage}
        src={aboutImage}
        alt="contact-form-image"
        className="contact-image"
      />
      <form action="#" className="contact-form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary "
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
