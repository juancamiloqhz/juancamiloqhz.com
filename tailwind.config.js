const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require("tailwindcss/plugin");
const { themes } = require('./themes');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        default: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.gray.700'),
      //       a: {
      //         color: theme('colors.blue.500'),
      //         '&:hover': {
      //           color: theme('colors.blue.700')
      //         },
      //         code: { color: theme('colors.blue.400') }
      //       },
      //       'h2,h3,h4': {
      //         color: theme('colors.gray.900'),
      //         fontFamily: theme('fontFamily.serif'),
      //         'scroll-margin-top': defaultTheme.spacing[32]
      //       },
      //       thead: {
      //         borderBottomColor: theme('colors.gray.200')
      //       },
      //       code: { color: theme('colors.pink.500') },
      //       'blockquote p:first-of-type::before': false,
      //       'blockquote p:last-of-type::after': false
      //     }
      //   },
      //   dark: {
      //     css: {
      //       color: theme('colors.gray.200'),
      //       a: {
      //         color: theme('colors.blue.400'),
      //         '&:hover': {
      //           color: theme('colors.blue.600')
      //         },
      //         code: { color: theme('colors.blue.400') }
      //       },
      //       blockquote: {
      //         borderLeftColor: theme('colors.gray.700'),
      //         color: theme('colors.gray.300')
      //       },
      //       'h2,h3,h4': {
      //         color: theme('colors.gray.100'),
      //         'scroll-margin-top': defaultTheme.spacing[32]
      //       },
      //       hr: { borderColor: theme('colors.gray.700') },
      //       ol: {
      //         li: {
      //           '&:before': { color: theme('colors.gray.500') }
      //         }
      //       },
      //       ul: {
      //         li: {
      //           '&:before': { backgroundColor: theme('colors.gray.500') }
      //         }
      //       },
      //       strong: { color: theme('colors.gray.100') },
      //       thead: {
      //         th: {
      //           color: theme('colors.gray.100')
      //         },
      //         borderBottomColor: theme('colors.gray.600')
      //       },
      //       tbody: {
      //         tr: {
      //           borderBottomColor: theme('colors.gray.700')
      //         }
      //       }
      //     }
      //   }
      // })
    },
  },
  daisyui: {
    themes,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('daisyui'),
    plugin(({ addVariant }) => {
      addVariant('radix-state-checked', '&[data-state="checked"]');
      addVariant('radix-state-unchecked', '&[data-state="unchecked"]');
      addVariant('radix-state-open', '&[data-state="open"]');
      addVariant('radix-state-closed', '&[data-state="closed"]');
      addVariant(
        'group-radix-state-open',
        ':merge(.group)[data-state="open"] &',
      );
    }),
  ],
};
