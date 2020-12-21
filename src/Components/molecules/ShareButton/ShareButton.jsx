import React from "react"
import "./ShareButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const ShareButton = () => {
  const btn = (
    <FontAwesomeIcon icon={faCoffee} />
    // <div class="btn_wrap">
    //   <span>Share</span>
    //   <div class="container">
    //     <i class="fab fa-facebook-f"></i>
    //     <i class="fab fa-twitter"></i>
    //     <i class="fab fa-instagram"></i>
    //     <i class="fab fa-github"></i>
    //   </div>

    // </div>
  )
  return btn
}

export default ShareButton
