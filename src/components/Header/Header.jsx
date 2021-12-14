import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

function Header(props) {
  return <h1 className="header">{props.children}</h1>;
}

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
