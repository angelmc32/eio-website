import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// import Header from "./header-original"
import Header from "./Header";
import "../../styles/styles.css";
import "@fontsource/questrial";
import "@fontsource/nunito-sans";

import UIkit from "uikit";
import icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

UIkit.use(icons);

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
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
