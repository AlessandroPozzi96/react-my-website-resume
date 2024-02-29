import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Constants } from "Constants/Constants";
import { SocialIcon } from "components/SocialIcon/SocialIcon";

export function SocialIcons({ isFooter }) {
  const style = isFooter ? { color: "white" } : {};
  const rel = isFooter ? "noopener noreferrer" : "noreferrer";
  const className = isFooter ? "" : "icon-colour  home-social-icons";
  const iconsData = [
    { icon: AiFillGithub, href: Constants.URLS.GITHUB_URL },
    { icon: AiOutlineTwitter, href: Constants.URLS.RICKROLLED_URL },
    { icon: FaLinkedinIn, href: Constants.URLS.LINKEDIN_URL },
    { icon: AiFillInstagram, href: Constants.URLS.RICKROLLED_URL },
  ];

  return (
    <ul className={isFooter ? "footer-icons" : "home-about-social-links"}>
      {iconsData.map((item, index) => (
        <SocialIcon
          key={index}
          BootStrapIcon={item.icon}
          href={item.href}
          style={style}
          rel={rel}
          className={className}
        />
      ))}
    </ul>
  );
}
