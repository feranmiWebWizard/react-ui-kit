import logo from "../../assets/images/Logo1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faWhatsapp,
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-peach p-4 text-center w-full fixed bottom-0">
      <section className="px-4">
        <section className="space-y-8">
          <img
            className="rounded-[50%] mx-auto"
            src={logo}
            alt="witty bakehouse's logo"
          />
          <div className="w-full flex justify-center">
            <ul className="font-thin lg:flex gap-4">
              <li>Home</li>
              <li>Our Story</li>
              <li>Menu</li>
              <li>Order Now</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="space-x-4">
            <FontAwesomeIcon
              className="w-[1.5rem] h-[1.5rem]"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="w-[1.5rem] h-[1.5rem]"
              icon={faWhatsapp}
            />
            <FontAwesomeIcon
              className="w-[1.5rem] h-[1.5rem]"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="w-[1.5rem] h-[1.5rem]"
              icon={faSquareFacebook}
            />
          </div>
        </section>
      </section>
      <sub className="font-thin">Copyright@2024 All right reserved</sub>
    </footer>
  );
}

export default Footer;
