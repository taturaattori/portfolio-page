import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    path: "https://github.com/taturaattori",
  },
  {
    icon: <FaLinkedin size={24} />,
    path: "https://www.linkedin.com/in/tatu-paukkeri-1a7a33262/",
  },
];

const SocialLinks = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialLinks.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={iconStyle}>
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
