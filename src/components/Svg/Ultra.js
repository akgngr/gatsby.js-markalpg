import * as React from "react"

function Ultra(props) {
  return (
    <svg
      viewBox="0 0 199 131"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="square"
      strokeMiterlimit={1.5}
      {...props}
    >
      <use
        xlinkHref="#prefix___Image1"
        x={4.166}
        width={188.228}
        height={71.055}
        transform="matrix(.99592 0 0 .98687 0 0)"
      />
      <text
        x={119.904}
        y={110.277}
        fontFamily="'Baskerville-BoldItalic','Baskerville',serif"
        fontWeight={700}
        fontStyle="italic"
        fontSize={82.436}
        fill="#070000"
        transform="matrix(1 0 -.07944 1 -49.363 0)"
      >
        {"g"}
        <tspan x="156.643px 197.143px" y="110.277px 110.277px">
          {"as"}
        </tspan>
      </text>
      <path
        d="M1.803 92.474l194.579.527M1.803 100.397h194.579"
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />
      <path
        d="M66.202 92.826h108.165M66.258 100.397H174.38"
        fill="none"
        stroke="#fff"
        strokeWidth={2.4}
      />
      <circle
        cx={103.446}
        cy={7.458}
        r={6.429}
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x={100.923}
        y={10.248}
        fontFamily="'ArialNarrow-Bold','Arial Narrow',sans-serif"
        fontWeight={700}
        fontStretch="condensed"
        fontSize={7.793}
        fill="#070000"
      >
        {"R"}
      </text>
      <defs>
        <image
          id="prefix___Image1"
          width={189}
          height={72}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default Ultra
