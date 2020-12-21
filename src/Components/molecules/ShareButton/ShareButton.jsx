import React from "react"
import "./ShareButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

const ShareButton = () => {
  const btn = (
    <div className="btn_wrap">
      <span>Contact</span>
      <div className="shareContainer">
        <FontAwesomeIcon icon={faEnvelopeSquare} className="socialIcon" />
        <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
        <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
      </div>
    </div>
  )
  return btn
}

export default ShareButton
