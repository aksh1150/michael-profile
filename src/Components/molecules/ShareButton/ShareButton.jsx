import React from "react"
import "./ShareButton.scss"
import { BaseLink } from "../../atoms"
import SocialMedia from "../SocialMedia"

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
