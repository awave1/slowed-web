import React from "react";
import {
  FooterContainer,
  FooterLink,
} from "@slowed/features/shell/components/Footer/styles.css";

export const Footer = () => (
  <footer className={FooterContainer}>
    <a
      className={FooterLink}
      href="https://github.com/awave1/"
      target="_blank"
      rel="noopener noreferrer"
    >
      made by awave
    </a>
  </footer>
);
