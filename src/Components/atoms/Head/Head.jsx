import React from "react"
import { Helmet } from "react-helmet"

const Head = ({
  pagename,
  metaDescription,
  metaKeywords,
  metaImage,
  title,
}) => {
  return (
    <Helmet title={`${pagename} | ${title}`}>
      <meta name="keywords" content={metaKeywords} />
      <meta name="description" content={metaDescription} />
      <meta name="language" content="English" />
      <meta name="author" content="Akshit Patel" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#B2E2E7" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Michelle Portfolio" />
      <meta property="og:title" content="Michelle Portfolio" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta name="image" property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1442" />
      <meta property="og:image:height" content="318" />
      <meta itemprop="name" content="Michelle Portfolio" />
      <meta itemprop="url" content={window.location.href} />
      <meta itemprop="description" content={metaDescription} />

      <meta itemprop="thumbnailUrl" content={metaImage} />
      <link rel="image_src" href={metaImage} />
      <meta itemprop="image" content={metaImage} />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="icon"
        type="image/svg"
        sizes="192x192"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="icon"
        type="image/svg"
        sizes="32x32"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="icon"
        type="image/svg"
        sizes="96x96"
        href="../../../static/icons/logo.svg"
      />
      <link
        rel="icon"
        type="image/svg"
        sizes="16x16"
        href="../../../static/icons/logo.svg"
      />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="msapplication-navbutton-color" content="#B2E2E7" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default Head
