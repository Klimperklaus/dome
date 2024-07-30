import React from "react";

const date = new Date().getFullYear();

function Footer() {
  return (
    <> &copy; Dominic Noack - {date === 2024 ? "2024" : `2024 - ${date}`}</>
  );
}

export default Footer;
