import React from "react"
import { PartnerFooter,Footer, Navigation,PartnerNavigation } from "../index"
import { Head } from "../../atoms"
import { graphql, useStaticQuery } from "gatsby"
import "./Layout.scss"

const Layout = ({
  pagename,
  children,
  metaDescription,
  metaKeywords,
  metaImage,
  noReferrer,
  noFollow,
  partners,
  partnerName
}) => {
  const NavigationLinks = [
    {
      title: "About Our Advisors",
      url: "/our-advisors",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ]
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          metaDescription
          metaKeywords
          metaImage
        }
      }
    }
  `)

  return (
    <>
      <Head
        pagename={pagename ? pagename : "Caribou"}
        metaKeywords={
          metaKeywords ? metaKeywords : data.site.siteMetadata.metaKeywords
        }
        metaDescription={
          metaDescription
            ? metaDescription
            : data.site.siteMetadata.metaDescription
        }
        metaImage={metaImage ? metaImage : data.site.siteMetadata.metaImage}
        noReferrer={noReferrer}
        noFollow={noFollow}
      />
      <noscript>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GATSBY_GTM_PRODUCTION}');`}</noscript>
      {partners?<PartnerNavigation links={NavigationLinks} partnerName={partnerName}/>:<Navigation links={NavigationLinks} partnerName={partnerName}/>}
      {children}
      {partners?<PartnerFooter/>:<Footer />}
    </>
  )
}

export default Layout
