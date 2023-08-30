import { NextRequest } from "next/server"
import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

const satoshi = fetch(
  new URL("../../../styles/Satoshi-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

// const inter = fetch(
//   new URL('../../../styles/Inter-Bold.ttf', import.meta.url),
// ).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  // const [satoshiData, interData] = await Promise.all([satoshi, inter]);
  const [satoshiData] = await Promise.all([satoshi])

  const { searchParams } = req.nextUrl
  const title = searchParams.get("title")

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: "0 100px",
          backgroundImage: `url(${new URL(
            "../../../public/background.png",
            import.meta.url
          ).toString()})`,
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            fontFamily: "Satoshi",
            background:
              "linear-gradient(95.78deg, #C7BF00 21.66%, #E43838 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            marginTop: "100px",
          }}
        >
          Juan Camilo QHz
        </h1>
        <p
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            // fontFamily: 'Inter',
            color: "black",
            opacity: 0.6,
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          {title}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Satoshi",
          data: satoshiData,
        },
        // {
        //   name: 'Inter',
        //   data: interData,
        // },
      ],
    }
  )
}
