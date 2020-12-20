import React from "react"
import { Button } from "react-bootstrap"

import "./Button.scss"
import { createUseStyles } from "react-jss"
import { BaseLink } from "../../atoms"
import variables from "../../../styles/variables.scss"

const Buttons = ({
  children,
  className,
  icon,
  iconAtStart,
  lightBackground,
  noLabel,
  bg,
  colour,
  noBorder,
  roundBoarder,
  // hover,
  ...props
}) => {
  const primaryColor = variables.primarycolor
  const hoverColor =
    bg === "white" || bg === "#fff" || bg === "#ffffff" ? colour : bg
  const useStyles = createUseStyles({
    root: {
      background: "red",
      "&.MuiButton-root": {
        background: `${bg || primaryColor}`,
        borderColor: `${
          bg === "white" || bg === "#fff" || bg === "#ffffff"
            ? primaryColor
            : bg
        }`,
        "& .MuiButton-label": {
          color: `${colour || "#ffffff"}`,
          "&:hover": {
            color: `${hoverColor || primaryColor}`,
          },
        },
      },
    },
  })

  // const classes = mystyle();
  const classes = useStyles()
  const composedClassName =
    `baselink extraclass ${className} ${icon ? "hasIcon" : ""} ${
      lightBackground ? "lightBackground" : ""
    } ${noLabel ? "noLabel" : ""} ${noBorder ? "noBorder" : ""} ${
      roundBoarder ? "roundBoarder" : ""
    } ${noLabel ? "noLabel" : ""} ${classes.root}` ||
    `baselink extraclass ${icon ? "hasIcon" : ""} ${
      lightBackground ? "lightBackground" : ""
    } ${noLabel ? "noLabel" : ""} ${noBorder ? "noBorder" : ""} ${
      roundBoarder ? "roundBoarder" : ""
    } ${classes.root} `

  const btns = iconAtStart ? (
    <BaseLink {...props}>
      <Button
        variant="danger"
        className={composedClassName}
        underline="none"
        size="lg"
        startIcon={icon}
      >
        {children}
      </Button>
    </BaseLink>
  ) : (
    <BaseLink {...props}>
      <Button
        variant="danger"
        className={composedClassName}
        underline="none"
        size="lg"
        endIcon={icon}
      >
        {children}
      </Button>
    </BaseLink>
  )
  return btns
}
export default Buttons
