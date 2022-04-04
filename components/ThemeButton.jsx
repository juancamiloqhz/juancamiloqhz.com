import { useRouter } from 'next/router';
import { useGlobalContext } from '../context/GlobalProvider';

export default function ThemeButton({ withText = false }) {
  const { locale } = useRouter();
  const { themePickerOpen, setThemePickerOpen } = useGlobalContext();
  return (
    <button
      type="button"
      className="flex items-center p-1 justify-center border-0 gap-2 m-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full h-8 w-8"
      // onClick={() => setTheme(colorTheme === 'light' ? 'dark' : 'light')}
      onClick={() => setThemePickerOpen((d) => !d)}
      title={locale === 'en' ? 'Change theme' : 'Cambiar tema'}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"></path>
      </svg>
      {withText && 'Light Mode'}
    </button>
  );
}

// MdFormatPaint
{
  /* <svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 24 24"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"></path>
</svg> */
}

// Moon
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 nav-link"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  />
</svg> */
}

// Lightbulb
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 nav-link"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    // className="dark:text-red-600"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  />
</svg> */
}
