import React from "react"

const SocialMedia = ({ data }) => {
  {
    data.map(share => (
      <BaseLink link={share.link} className="socialIcon" key={share.link}>
        <img
          src={require(`../../../static/icons/${share.icon}.svg`)}
          alt={share.icon}
        />
      </BaseLink>
    ))
  }
}

export default SocialMedia
