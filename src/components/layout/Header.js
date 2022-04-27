import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = ({ siteTitle }) => {
  return <Navbar />;
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
