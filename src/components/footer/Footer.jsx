import "./footer.scss";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Made with ❤ and <b>React Js</b>
      </span>
    </footer>
  );
};

export default Footer;
