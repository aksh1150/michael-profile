import React from "react"
import "./ShareButton.scss"
import { BaseLink, SocialMedia } from "../../atoms"

const ShareButton = ({ iconData }) => {
  const btn = (
    <div className="btn_wrap">
      <span>Contact</span>
      <div className="shareContainer">
        <SocialMedia data={iconData} />
      </div>
    </div>
  )
  return btn
}

export default ShareButton
