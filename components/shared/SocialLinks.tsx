import {
  FiCodepen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

export default function SocialLinks({ size = 20 }: { size?: number }) {
  return (
    <>
      <div
        className="tooltip transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        data-tip="GitHub"
      >
        <a
          href="https://github.com/juancamiloqhz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiGithub size={size} />
        </a>
      </div>
      <div
        className="tooltip transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        data-tip="Twitter"
      >
        <a
          href="https://twitter.com/juancamiloqhz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiTwitter size={size} />
        </a>
      </div>
      {/* <div
            className="tooltip transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="Mastodon"
          >
            <a
              href="https://indieweb.social/@juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMastodon size={size} />
            </a>
          </div> */}
      <div
        className="tooltip transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        data-tip="Instagram"
      >
        <a
          href="https://instagram.com/juancamiloqhz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiInstagram size={size} />
        </a>
      </div>
      <div
        className="tooltip transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        data-tip="LinkedIn"
      >
        <a
          href="https://linkedin.com/juancamiloqhz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiLinkedin size={size} />
        </a>
      </div>
      <div
        className="tooltip transition-all duration-300 hover:-translate-y-1 hover:text-primary"
        data-tip="Codepen"
      >
        <a
          href="https://codepen.io/juancamiloqhz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiCodepen size={size} />
        </a>
      </div>
    </>
  );
}
