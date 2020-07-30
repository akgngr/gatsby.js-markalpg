import * as React from "react"

function Romano(props) {
  return (
    <svg
      viewBox="0 0 210 78"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <text
        x={101.564}
        y={67.101}
        fontFamily="'Thonburi-Bold','Thonburi'"
        fontWeight={700}
        fontSize={19.312}
        fill="#368ebd"
      >
        {"a"}
        <tspan
          x="111.365px 121.651px 129.707px 140.347px 151.049px 160.851px"
          y="67.101px 67.101px 67.101px 67.101px 67.101px 67.101px"
        >
          {"utogas"}
        </tspan>
      </text>
      <text
        x={71.461}
        y={51.05}
        fontFamily="'AppleSDGothicNeo-Bold','Apple SD Gothic Neo'"
        fontWeight={700}
        fontSize={39.753}
        fill="#e10918"
      >
        {"R"}
        <tspan
          x="90.455px 112.096px 137.33px 157.188px 178.327px"
          y="51.05px 51.05px 51.05px 51.05px 51.05px"
        >
          {"OMANO"}
        </tspan>
      </text>
      <circle cx={195.803} cy={17.722} r={4.197} fill="#fff" stroke="#e42622" />
      <text
        x={194.156}
        y={19.543}
        fontFamily="'ArialNarrow-Bold','Arial Narrow',sans-serif"
        fontWeight={700}
        fontStretch="condensed"
        fontSize={5.087}
        fill="#e42622"
      >
        {"R"}
      </text>
      <g fill="#0699d7">
        <path d="M10.86 68.92C4.175 61.644 0 51.325 0 39.888 0 17.873 15.47 0 34.525 0S69.05 17.873 69.05 39.888c0 17.5-9.775 32.382-23.355 37.751 10.753-5.89 18.26-19.174 18.26-34.602 0-20.886-13.758-37.843-30.704-37.843S2.547 22.151 2.547 43.037c0 10.008 3.158 19.113 8.313 25.883z" />
        <path d="M21.21 21.205c-1.557.055-.071 29.756-.688 35.854-.464 4.594-7.489 4.134-7.5 0-.018-6.588-.485-35.757 0-38.558.25-1.443 1.415-2.833 3.408-3.225 10.526-2.066 37.454-1.156 38.95 17.821.658 8.345-19.635 11.932-23.362 13.842-5.049 2.586 16.513 16.28 19.475 19.944.449.556.211 1.651-.665 1.162-13.997-7.813-25.604-13.293-26.87-20.773-1.532-9.059 25.443-10.377 24.435-15.784-1.182-6.341-11.758-10.828-27.183-10.283z" />
      </g>
    </svg>
  )
}

export default Romano
