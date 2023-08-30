import Head from "next/head"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import {
  FiCodepen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi"

import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

const settings = {
  meta: {
    rootUrl: "https://juancamiloqhz.com",
    title: "JuanCamiloQHz",
    description:
      "Software Engineer, MBA, Mechanical Engineer and Professional Pyrotechnician",
    social: {
      graphic: `https://juancamiloqhz.com/avatar.png`,
      twitter: "@juancamiloqhz",
    },
  },
  keywords:
    "Software Engineer, Web Developer, Full Stack Developer, Software Developer, Mechanical Engineer, Professional Pyrotechnician, React, Next.js, Node.js",
}

interface SocialTagsTypes {
  openGraphType?: "profile" | "article" | "website"
  url?: string
  title?: string
  description?: string
  imageUrl?: string
  width?: string
  height?: string
  alt?: string
  name?: string
  lastName?: string
  username?: string
  gender?: string
  createdAt?: string
  updatedAt?: string
  authorUrl?: string
  mainCategory?: string
  tagArray?: any
}

const socialTags = ({
  openGraphType,
  url,
  title,
  description,
  imageUrl,
  width,
  height,
  alt,
  name,
  lastName,
  username,
  gender,
  createdAt,
  updatedAt,
  authorUrl,
  mainCategory,
  tagArray,
}: SocialTagsTypes) => {
  const metaTags = [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:creator",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: "twitter:image:src", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "og:title", content: title },
    { name: "og:type", content: openGraphType },
    { name: "og:url", content: url },
    { name: "og:description", content: description },
    {
      name: "og:site_name",
      content: settings && settings.meta && settings.meta.title,
    },
    {
      name: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      name: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },

    // Og Imagen
    { name: "og:image:url", content: imageUrl },
    { name: "og:image:secure_url", content: imageUrl },
    // { name: 'og:image:type', content: imageType },
    { name: "og:image:width", content: width },
    { name: "og:image:height", content: height },
    { name: "og:image:alt", content: alt },

    // og:image:url - Identical to og:image.
    // og:image:secure_url - An alternate url to use if the webpage requires HTTPS.
    // og:image:type - A MIME type for this image. Ex. image/png, image/jpeg, image/gif.
    // og:image:width - The number of pixels wide.
    // og:image:height - The number of pixels high.
    // og:image:alt - A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt.

    // Profile
    ...(openGraphType === "profile"
      ? [
          { name: "og:profile:first_name", content: name },
          { name: "og:profile:last_name", content: lastName },
          { name: "og:profile:username", content: username },
          { name: "og:profile:gender", content: gender },
        ]
      : []),
    // profile:first_name - string - A name normally given to an individual by a parent or self-chosen.
    // profile:last_name - string - A name inherited from a family or marriage and by which the individual is commonly known.
    // profile:username - string - A short unique string to identify them.
    // profile:gender - enum(male, female) - Their gender.

    // Article
    ...(openGraphType === "article"
      ? [
          { name: "og:profile:first_name", content: name },
          { name: "og:profile:last_name", content: lastName },
          { name: "og:profile:username", content: username },
          { name: "og:profile:gender", content: gender },
          {
            name: "og:article:published_time",
            content: createdAt || new Date().toISOString(),
          },
          {
            name: "og:article:modified_time",
            content: updatedAt || new Date().toISOString(),
          },
          // { name: 'og:article:expiration_time', content: expiration_time },
          { name: "og:article:author", content: authorUrl },
          { name: "og:article:section", content: mainCategory },
          { name: "og:article:tag", content: tagArray },
          // published_time - datetime - When the article was first published.
          // modified_time - datetime - When the article was last changed.
          // expiration_time - datetime - When the article is out of date after.
          // author - profile array - Writers of the article.
          // section - string - A high-level section name. E.g. Technology
          // tag - string array - Tag words associated with this article.
        ]
      : []),
  ]

  return metaTags
}

interface ContainerProps {
  children: React.ReactNode
  openGraphType?: "profile" | "article" | "website"
  schemaType?:
    | "WebPage"
    | "Article"
    | "Profile"
    | "WebSite"
    | "AboutPage"
    | "ContactPage"
    | "SearchResultsPage"
    | "Blog"
  exclusiveTitle?: string
  title?: string
  description?: string
  imageUrl?: string
  url?: string
  width?: string
  height?: string
  alt?: string
  name?: string
  lastName?: string
  username?: string
  gender?: string
  createdAt?: string
  updatedAt?: string
  authorUrl?: string
  mainCategory?: string
  tagArray?: any
  keywords?: string
}

export default function Container({ children, ...props }: ContainerProps) {
  const { locale, asPath } = useRouter()

  const {
    openGraphType = "website",
    schemaType = "WebPage",
    url = `https://juancamiloqhz.com${
      locale === "en" ? "" : `/${locale}`
    }${asPath}`,
    exclusiveTitle = "",
    title = "Home",
    description = settings && settings.meta && settings.meta.description,
    imageUrl = settings &&
      settings.meta &&
      settings.meta.social &&
      settings.meta.social.graphic,
    width = "300",
    height = "190",
    alt = "Logo JuanCamiloQHz",
    name = "Juan Camilo",
    lastName = "Qhz",
    username = "juancamiloqhz",
    gender = "male",
    createdAt = "",
    updatedAt = "",
    authorUrl = "https://juancamiloqhz.com",
    mainCategory = "",
    tagArray = [""],
    keywords = settings && settings.keywords,
  } = props

  return (
    <>
      <Head>
        <title>{exclusiveTitle || `${title} | JuanCamiloQHz`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" key="description" content={description} />
        <meta property="og:image" key="og:image" content={imageUrl} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="canonical" href={url} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        {/* <meta name="theme-color" content="#000" /> */}
        <meta name="theme-color" content="currentColor" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        {socialTags({
          openGraphType,
          url,
          title,
          description,
          imageUrl,
          width,
          height,
          alt,
          name,
          lastName,
          username,
          gender,
          createdAt,
          updatedAt,
          authorUrl,
          mainCategory,
          tagArray,
        }).map(({ name, content }) => {
          return <meta key={name} name={name} content={content} />
        })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": schemaType, // https://schema.org/docs/full.html
              name: title,
              description,
              url: url,
            }),
          }}
        />
      </Head>
      <Header />
      <div className="relative">
        {children}
        <Footer />
        {/* Fixed Social Links */}
        <motion.div
          className="fixed bottom-0 left-8 hidden h-80 w-10 flex-col items-center gap-5 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div
            className="tooltip tooltip-right transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="GitHub"
          >
            <a
              href="https://github.com/juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiGithub size={20} />
            </a>
          </div>
          <div
            className="tooltip tooltip-right transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="Twitter"
          >
            <a
              href="https://twitter.com/juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiTwitter size={20} />
            </a>
          </div>
          {/* <div
            className="tooltip tooltip-right transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="Mastodon"
          >
            <a
              href="https://indieweb.social/@juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMastodon size={20} />
            </a>
          </div> */}
          <div
            className="tooltip tooltip-right transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="Instagram"
          >
            <a
              href="https://instagram.com/juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiInstagram size={20} />
            </a>
          </div>
          <div
            className="tooltip tooltip-right transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="LinkedIn"
          >
            <a
              href="https://linkedin.com/juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
          <div
            className="tooltip tooltip-right transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            data-tip="Codepen"
          >
            <a
              href="https://codepen.io/juancamiloqhz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiCodepen size={20} />
            </a>
          </div>
          <div className="h-full w-[1px] bg-base-content"></div>
        </motion.div>
        {/* Fixed Email */}
        <motion.div
          className="fixed bottom-0 right-8 hidden h-56 w-10 flex-col items-center gap-6 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <a
            href="mailto:juancamiloqhz@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="rotate-90 text-sm tracking-wider transition-all duration-300 hover:-translate-y-1 hover:text-primary"
          >
            juancamiloqhz@gmail.com
          </a>
          <div className="fixed bottom-0 h-full max-h-24 w-[1px] bg-base-content"></div>
        </motion.div>
      </div>
    </>
  )
}
