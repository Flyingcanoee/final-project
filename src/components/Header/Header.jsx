import React from 'react';
import './Header.scss';
export default function Header(props) {
  return <h1 className="main-header">{props.title}</h1>;
}
