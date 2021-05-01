import React from 'react';

export default function Footer() {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <p className="center">&copy; Slick's Slices {new Date().getFullYear()}</p>
      <a
        href="https://wa.me/584126213522"
        className="whatsapp_float"
        target="blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon" />
      </a>
    </footer>
  );
}
