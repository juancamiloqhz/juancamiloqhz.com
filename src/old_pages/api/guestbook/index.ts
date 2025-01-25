import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

// import prisma from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // const entries = await prisma.guestbook.findMany({
    //   orderBy: {
    //     updated_at: "desc",
    //   },
    // })
    // console.dir(entries, { depth: null });

    const entries = [
      {
        id: 1,
        body: "Hello, world!",
        created_by: "John Doe",
        updated_at: new Date().toISOString(),
        email: "john@doe.com",
      },
    ]

    return res.json(
      entries.map((entry: any) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      }))
    )
  }

  const session = await getSession({ req })
  if (!session || !session.user) {
    return res.status(403).send("Unauthorized")
  }
  const { email, name } = session.user

  if (req.method === "POST") {
    // const newEntry = await prisma.guestbook.create({
    //   data: {
    //     email: email as string,
    //     body: (req.body.body || "").slice(0, 500),
    //     created_by: name as string,
    //   },
    // })

    const newEntry = {
      id: 1,
      body: "Hello, world!",
      created_by: "John Doe",
      updated_at: new Date().toISOString(),
      email: "john@doe.com",
    }

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    })
  }

  return res.send("Method not allowed.")
}
