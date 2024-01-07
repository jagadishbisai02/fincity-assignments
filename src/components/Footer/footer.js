import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsEnvelopeFill, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-icons">
          <ul>
            <li>
              <span>
                <RiInstagramFill />
              </span>
            </li>
            <li>
              <span>
                <BsLinkedin />
              </span>
            </li>
            <li>
              <span>
                <BsEnvelopeFill />
              </span>
            </li>
          </ul>
        </div>
        <div className="copy-rights">
          <p>Copyright © 2024. All rights reserved</p>
        </div>
        <img
          src="https://res.cloudinary.com/df5wssoz1/image/upload/v1704393271/samples/fincity/Vector_btv68n.png"
          alt="vectors"
          className="vectors"
        />
      </div>
    </>
  );
};
export default Footer;
