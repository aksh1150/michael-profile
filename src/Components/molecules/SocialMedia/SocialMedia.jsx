import React from "react"
import { BaseLink } from "../../atoms"

const SocialMedia = ({ data }) => {
  return data.map(share => (
    <BaseLink
      link={share.link}
      className="socialIcon"
      key={share.link}
      noHoverEffect
    >
      <img
        src={require(`../../../static/icons/${share.icon}.svg`)}
        alt={share.icon}
      />
    </BaseLink>
  ))
}

export default SocialMedia
