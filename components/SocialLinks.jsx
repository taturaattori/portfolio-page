import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    path: "",
  },
  {
    icon: <FaLinkedin size={24} />,
    path: "",
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
