import PropTypes from 'prop-types'

// BASE SVG COMPONENT
// ------------------------------

const Svg = ({ color, size, stroke, ...props }) => (
  <svg
    fill="none"
    height={size}
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
)
Svg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  stroke: PropTypes.number,
}
Svg.defaultProps = {
  color: 'currentColor',
  size: 24,
  stroke: 2,
}

// Icons
// https://feathericons.com
// ------------------------------

export const AlertIcon = (props) => (
  <Svg {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </Svg>
)

export const CheckmarkIcon = (props) => (
  <Svg {...props}>
    <polyline points="20 6 9 17 4 12" />
  </Svg>
)

export const MicrophoneIcon = (props) => (
  <Svg {...props}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </Svg>
)

export const PinIcon = (props) => (
  <Svg {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
)

export const SignoutIcon = (props) => (
  <Svg {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </Svg>
)

export const UserIcon = (props) => (
  <Svg {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Svg>
)

export const XIcon = (props) => (
  <Svg {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Svg>
)

export const SearchIcon = (props) => (
  <Svg {...props}>
    <circle cx="10" cy="10" r="9" fill="none" />
    <path strokelinecap="round" d="M16.5 16.5L23 23" />
  </Svg>
)

export const FacebookMessenger = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="-1 0 226 226"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <linearGradient id="a" y1="6.76%" x2="50%" x1="50%" y2="95.6%">
        <stop stopColor="#00C6FF" offset="0" />
        <stop stopColor="#0068FF" offset="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m41.255 185.52v40.2l37.589-21.37c10.478 3.02 21.616 4.65 33.156 4.65 61.86 0 112-46.79 112-104.5 0-57.714-50.14-104.5-112-104.5-61.856 0-112 46.786-112 104.5 0 32.68 16.078 61.86 41.255 81.02z"
    />
    <path
      fill="#fff"
      d="m100.04 75.878l-60.401 63.952 54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"
    />
  </svg>
)

export function GrowiIcon({ size }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 668.000000 480.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,480.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M3281 4669 c-10 -25 -45 -103 -106 -234 -52 -113 -262 -532 -320
-640 -62 -117 -106 -199 -139 -257 -14 -27 -38 -69 -52 -95 -15 -27 -52 -93
-84 -148 -32 -55 -67 -116 -78 -135 -220 -386 -593 -947 -924 -1390 -185 -247
-335 -435 -583 -733 -155 -186 -472 -531 -737 -802 -75 -77 -135 -141 -134
-142 2 -2 56 10 122 26 176 42 485 106 684 141 96 17 198 35 225 40 46 9 158
25 445 64 185 25 530 62 685 73 55 3 103 7 108 9 4 1 13 2 20 3 13 1 134 137
167 187 8 13 47 65 86 116 184 240 345 504 515 842 49 99 96 181 104 182 9 1
45 -60 99 -169 47 -95 106 -210 132 -257 55 -100 233 -387 275 -445 110 -150
271 -360 309 -403 l45 -50 155 -11 c239 -17 682 -62 805 -81 33 -5 123 -19
200 -30 156 -23 283 -44 395 -64 41 -8 115 -21 164 -30 116 -21 438 -90 606
-131 30 -7 57 -11 59 -9 3 2 -70 80 -161 172 -257 260 -486 505 -638 682 -30
35 -75 87 -100 115 -25 28 -65 75 -90 104 -25 30 -70 84 -100 120 -59 70 -230
282 -341 422 -36 46 -119 156 -184 244 -65 88 -135 183 -155 210 -110 149
-464 675 -526 783 -10 17 -22 32 -26 32 -4 0 -8 5 -8 12 0 6 -28 57 -63 112
-69 110 -210 345 -216 361 -2 5 -32 60 -66 120 -34 61 -82 146 -105 190 -23
44 -57 107 -75 140 -60 110 -253 500 -315 635 -33 74 -62 136 -65 138 -2 3 -9
-6 -14 -19z"
        />
      </g>
    </svg>
  )
}

GrowiIcon.defaultProps = {
  size: '40px',
}

// export const Close = styled.button`
//   background: 0;
//   border: 0;
//   border-radius: 2.9rem;
//   color: ${(props) => props.theme.colors.greyFonts};
//   cursor: pointer;
//   line-height: 0rem;
//   padding: 0rem;
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   transition: background-color 150ms, color 150ms;
//   height: 2.8rem;
//   width: 2.8rem;
//   z-index: 11;
// `;
