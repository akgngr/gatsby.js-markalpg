import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={500} height={2} viewBox="0 0 48 1" {...props}>
      <title>{"Rectangle 5"}</title>
      <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </svg>
  )
}

export default SvgComponent
