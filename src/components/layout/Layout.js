import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// import Header from "./header-original"
import Header from "./Header";
import "../../styles/styles.css";
import "@fontsource/questrial";
import "@fontsource/nunito-sans";

import UIkit from "uikit";
// import icons from 'uikit/dist/js/uikit-icons';
import "uikit/dist/css/uikit.min.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="uk-container">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
