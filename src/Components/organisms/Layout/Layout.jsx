import React from "react"
import { Head } from "../../atoms"
import "./Layout.scss"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Layout = ({
  pagename,
  children,
  metaDescription,
  metaKeywords,
  metaImage,
  title,
  className,
}) => {
  return (
    <>
      <Head
        pagename={pagename ? pagename : "Home - Michelle Profile"}
        metaKeywords={
          metaKeywords
            ? metaKeywords
            : "Michelle Profile, A designer, Toronto, Canada, Web designer, web, graphics, design, designer, graphic designer, graphic, best, best designer in toronto, best designer in canada, best designer in gta, best designer in ontario, gta, ontario, graphics, sketch, invision"
        }
        title={title ? title : ""}
        metaDescription={
          metaDescription
            ? metaDescription
            : "Michelle Profile - A web designer portfolio of Michelle Lam "
        }
        metaImage={metaImage ? metaImage : ""}
      />
      <div className={className}>{children}</div>
    </>
  )
}

export default Layout
