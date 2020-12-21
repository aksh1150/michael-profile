import React from "react"
import "./ShareButton.scss"
import { BaseLink } from "../../atoms"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShareButton = ({ iconData }) => {
  const btn = (
    <div className="btn_wrap">
      <span>Contact</span>
      <div className="shareContainer">
        {iconData.map(share => (
          <BaseLink link={share.link} className="socialIcon" key={share.link}>
            <FontAwesomeIcon icon={share.icon} size="lg" />
          </BaseLink>
        ))}
      </div>
    </div>
  )
  return btn
}

export default ShareButton