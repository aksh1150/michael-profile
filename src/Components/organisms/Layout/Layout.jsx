import React from "react"
import { Header, Footer } from "../../molecules"
import { Head } from "../../atoms"
import "./Layout.scss"

const Layout = ({
  pagename,
  children,
  metaDescription,
  metaKeywords,
  metaImage,
  menuBackground,
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
        metaDescription={
          metaDescription
            ? metaDescription
            : "Michelle Profile - A web designer portfolio of Michelle Lam "
        }
        metaImage={metaImage ? metaImage : ""}
      />
      <Header background={menuBackground} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
