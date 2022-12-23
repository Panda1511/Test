import React, { useState } from "react";
import { footMenu, footSocial } from "../../data/footerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [alert, setAlert] = useState("");

  const onFinish = (values) => {
    setAlert("Thankyou, you are subscribed to receive our daily newsletter");

    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.errorFields);
  };

  const currYear = new Date().getFullYear();

  const onClickFooterItem = (e, path) => {
    e.preventDefault();
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper footer_wrapper">
          <div className="foot_menu">
            <h4>About</h4>
            <p style={{ marginTop: "1.8rem" }}>
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </p>
            <div className="foot_social">
              {footSocial.map((item) => {
                const { id, icon, path } = item;
                return (
                  <a href={path} key={id}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {footMenu.map((item) => {
            const { id, title, menu } = item;
            return (
              <div className="foot_menu" key={id}>
                <h4>{title}</h4>
                <ul>
                  {menu.map((item) => {
                    const { id, path, link } = item;
                    return (
                      <li key={id}>
                        <a
                          href={path}
                          onClick={(e) => onClickFooterItem(e, path)}
                        >
                          <FontAwesomeIcon
                            icon="right-long"
                            className="arrow_icon"
                          />
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="foot_menu">
            <h4>Have a Questions?</h4>
            <ul>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon="right-long"
                    className="question_icon"
                  />
                  203 Fake St. Mountain View, San Francisco, California, USA
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="phone" className="question_icon" />
                  +2 392 3929 210
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="envelope" className="question_icon" />
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sub_footer">
        <div className="container">
          <div className="sub_footer_wrapper">
            <div className="foot_copyright">
              <p>
                Copyright ©{currYear} All rights reserved | This template is
                made with{" "}
                <FontAwesomeIcon icon="heart" style={{ marginRight: "10px" }} />{" "}
                by Colorlib
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
