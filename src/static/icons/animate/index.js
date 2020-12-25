import React from "react"
import { motion } from "framer-motion"

const DownArrow = () => (
  <motion.svg
    width="95.5px"
    height="67.5px"
    viewBox="0 0 191 135"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Landing_static"
        transform="translate(-124.000000, -375.000000)"
        fill="#08598A"
        fillRule="nonzero"
      >
        <g
          id="ic_keyboard_arrow_down_48px"
          transform="translate(219.500000, 442.750000) scale(-1, 1) translate(-219.500000, -442.750000) translate(124.000000, 375.750000)"
        >
          <path
            d="M189.903257,0.925460526 L190.421,1.44346053 L190.421,51.1794605 L107.644737,133.956414 L0,26.3116776 L25.3862171,0.925460526 L107.644737,83.1839803 L189.903257,0.925460526 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </g>
  </motion.svg>
)

const Line = () => (
  <motion.svg
    width="935px"
    height="928px"
    viewBox="0 0 1870 1856"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ scale: 2 }}
    transition={{ duration: 1 }}
    overflow="hidden"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Landing_static" transform="translate(148.000000, 461.000000)">
        <g id="Group" transform="translate(-147.574946, -460.348249)">
          <rect
            id="Rectangle-Copy-9"
            fill="#000000"
            transform="translate(281.500000, 1573.027223) rotate(-315.000000) translate(-281.500000, -1573.027223) "
            x="269"
            y="1188.02722"
            width="25"
            height="770"
          ></rect>
          <rect
            id="Rectangle-Copy-11"
            fill="#000000"
            transform="translate(1587.574946, 282.000000) rotate(-315.000000) translate(-1587.574946, -282.000000) "
            x="1575.07495"
            y="-103"
            width="25"
            height="770"
          ></rect>
          <line
            x1="562.574946"
            y1="1348.7292"
            x2="672.574946"
            y2="1238.7292"
            id="Path-6"
            stroke="#979797"
          ></line>
          <line
            x1="803.074946"
            y1="1097.2292"
            x2="905.351863"
            y2="994.952277"
            id="Path-6-Copy"
            stroke="#979797"
          ></line>
        </g>
      </g>
    </g>
  </motion.svg>
)

export { DownArrow, Line }
