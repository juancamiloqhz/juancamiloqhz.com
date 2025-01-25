import React from "react"
import Image, { type ImageProps } from "next/image"

export default function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = React.useState(true)
  const [src, setSrc] = React.useState(props.src)
  React.useEffect(() => setSrc(props.src), [props.src]) // update the `src` value when the `prop.src` value changes

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      className={`${props.className} transition-all ${
        isLoading
          ? "scale-110 rounded-full blur-2xl grayscale"
          : "scale-100 rounded-full blur-0 grayscale-0"
      }`}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
      onLoadingComplete={async () => {
        setLoading(false)
      }}
    />
  )
}
